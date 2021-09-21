import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response, Router, text } from "express";

const router = Router();
const prisma = new PrismaClient();


interface Quiz{
    name: string,
    description: string,
    questions: [ Question ]
}

interface Question{
    question_type: string,
    text: string,
    options: [ string ]
}


router.post("/", async (req: Request, res: Response) => {
   let dataFront:Quiz= req.body
  let quiz:any = await prisma.quiz.create({
    data: {
        name: dataFront.name,
        description: dataFront.description,
        questions: {
            createMany:{
                data: dataFront.questions.map(question=>
                    ({text:question.text, question_type:question.question_type}))
            }
        }
      },
  })
  .then(async res=> {
      let post = await prisma.quiz.findUnique({where: {id: res.id}, select:{questions:{select:{id:true}}}})
       post?.questions.map(async (question, index)=> { dataFront.questions[index].options &&
          dataFront.questions[index].options.map(async option =>{ 
            await prisma.option.create({
                data:{
                    option: option,
                    questionId: question.id
                }
          })
          });
      })
  })
  .catch((error) => res.status(500).send(error));
  res.status(200).send(`quiz creado`);
});


export default router;