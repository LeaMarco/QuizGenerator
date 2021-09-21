import { Router } from 'express';
import detail from "./detail";
import create from "./create";
import list from "./list";



const router = Router();
router.use("/detail",  detail);//
router.use("/create",  create);//
router.use("/list",  list);//



export default router;