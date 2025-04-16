import { Router } from 'express';
import { addCategory, allCategory } from '../controllers/categories/categoriesController';

const authRouter = Router();


authRouter.get('/caregory',allCategory);
authRouter.post('/add-caregory',addCategory);


export default authRouter;