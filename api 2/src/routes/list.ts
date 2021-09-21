import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response, Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  let quizList = await prisma.quiz.findMany({
    select: {
      id: true,
      name: true,
      description: true
    },
  });

  res.send(quizList);
});


export default router;
