import { Router} from "express";
import Login from "./Login";
import Profile from "./Profile";
import Logout from "./Logout";

const router=Router({mergeParams:true});

router.use('/login',Login)
router.use('/profile',Profile)
router.use('/logout',Logout)

export default router;