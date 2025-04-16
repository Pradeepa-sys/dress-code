

import { Router } from 'express';
import { login, SignUp } from '../controllers/authController/authController.js';
import { validateLogin, validateRegister } from '../middleware/validator.js';
const authRouter = Router();


authRouter.post('/register',validateRegister,SignUp);
authRouter.post('/login',validateLogin,login);

export default authRouter;