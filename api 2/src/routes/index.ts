import { Router } from 'express';
import detail from "./detail";
import create from "./create";


const router = Router();
router.use("/detail",  detail);//
router.use("/create",  create);//


export default router;