import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response, Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.delete("/:id", async (req: Request, res: Response) => {
  let id = parseInt(req.params.id);
  try {
    let questionsId = await prisma.question.findMany({
      where: {
        quizId: id,
      },
      select: {
        id: true,
      },
    });
    questionsId.map(
      async (questionId) =>
        await prisma.option.deleteMany({
          where: {
            questionId: questionId.id,
          },
        })
    );
    await prisma.question.deleteMany({
      where: {
        quizId: id,
      },
    });
    await prisma.quiz.delete({
      where: {
        id: id,
      },
    });
    res.status(200).send("quiz eliminado");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
