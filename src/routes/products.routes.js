import { Router } from 'express';
import { createProduct, listProducts } from '../controllers/products.controller.js';
import { authenticate, authorize } from '../middlewares/authJwt.js';

const r = Router();
r.get('/', listProducts);
r.post('/', authenticate, authorize('restaurant'), createProduct);
export default r;
