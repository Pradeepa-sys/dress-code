import { Router } from 'express';
import { addProduct, allProducts } from '../controllers/product/productcontroller.js';

const authProduct = Router();


authProduct.get('/',allProducts);
authProduct.post('/add',addProduct);


export default authProduct;