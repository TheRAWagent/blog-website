import { Router } from "express";

import Logout from "../controllers/LogoutController";

const router = Router({ mergeParams: true });

router.get('/', Logout);

export default router;