import { Router } from "express";
import Profile from "../controllers/ProfileController";


const router = Router({ mergeParams: true });

router.get('/', Profile);

export default router;