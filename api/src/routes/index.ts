import { Router } from 'express';
import detail from "./detail";
import create from "./create";
import list from "./list";
import deleteQuiz from "./delete";




const router = Router();
router.use("/detail",  detail);//
router.use("/create",  create);//
router.use("/list",  list);//
router.use("/delete",  deleteQuiz);//




export default router;