import {Router} from "express";
import {login,register,logout,profile} from "../controller/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js";
import {validateSchema} from "../middlewares/validate.middleware.js"
import {loginSchema,registerSchema} from "../schema/auth.schema.js"
const router = Router();


router.post('/register',validateSchema(registerSchema), register);
router.post('/login',validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile',authRequired,profile);
export default router;