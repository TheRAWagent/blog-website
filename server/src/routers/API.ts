import { Router} from "express";
import Login from "./Login";
import Profile from "../controllers/ProfileController";

const router=Router({mergeParams:true});

router.use('/login',Login)
router.use('/profile',Profile)

export default router;