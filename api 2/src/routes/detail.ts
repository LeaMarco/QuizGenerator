import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response, Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.get("/:id", async (req: Request, res: Response) => {
  console.log(parseInt(req.params.id));
  let id = parseInt(req.params.id);
  // let quiz= console.log("jola")
  let quiz = await prisma.quiz.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      description: true,
      questions: {
        select: {
          id: true,
          text: true,
          question_type: true,
          options: {
            select: {
              option: true,
            },
          },
        },
      },
    },
  });

  res.send(quiz);
});


export default router;
