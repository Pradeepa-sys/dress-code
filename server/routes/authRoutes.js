

import { Router } from 'express';
import { SignUp } from '../controllers/authController/authController.js';
// const { validateLogin, validateRegister } = require ( '../middleware/validator.js');
const authRouter = Router();


authRouter.post('/register',SignUp);

export default authRouter;