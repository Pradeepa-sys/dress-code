

import { Router } from 'express';
import { login, SignUp } from '../controllers/authController/authController.js';
// const { validateLogin, validateRegister } = require ( '../middleware/validator.js');
const authRouter = Router();


authRouter.post('/register',SignUp);
authRouter.post('/login',login);

export default authRouter;