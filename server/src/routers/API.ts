import { Router} from "express";
import Login from "./Login";

const router=Router({mergeParams:true});

router.use('/login',Login)

export default router;