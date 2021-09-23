import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response, Router, text } from "express";

const router = Router();
const prisma = new PrismaClient();

interface Quiz {
  name: string;
  description: string;
  questions: [Question];
}

interface Question {
  question_type: string;
  text: string;
  options: [string];
}

router.post("/", async (req: Request, res: Response) => {
  let dataFront: Quiz = req.body;
  try{
  let quiz = await prisma.quiz.create({
    data: {
      name: dataFront.name,
      description: dataFront.description,
      questions: {
        createMany: {
          data: dataFront.questions.map((question) => ({
            text: question.text,
            question_type: question.question_type,
          })),
        },
      },
    },
  });

  let post = await prisma.quiz.findUnique({
    where: { id: quiz.id },
    select: { questions: { select: { id: true } } },
  });
  post?.questions
    .map((question, index) => {
      dataFront.questions[index].options &&
        dataFront.questions[index].options.map(async (option) => {
          await prisma.option.create({
            data: {
              option: option,
              questionId: question.id,
            },
          });
        });
    })
    res.status(200).send(`${quiz.id}`);
  }
    catch(error) {res.status(500).send(error)}
    finally{
    }
});

export default router;
