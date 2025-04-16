import { Router } from 'express';
import { addCategory, allCategory } from '../controllers/categories/categoriesController.js';

const authCategory = Router();


authCategory.get('/',allCategory);
authCategory.post('/add',addCategory,);


export default authCategory;