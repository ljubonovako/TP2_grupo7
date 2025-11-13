import { Router } from 'express';
import { createOrder, updateStatus } from '../controllers/orders.controller.js';
import { authenticate, authorize } from '../middlewares/authJwt.js';

const r = Router();
r.post('/', authenticate, authorize('customer'), createOrder);
r.put('/:id/status', authenticate, authorize('restaurant','admin'), updateStatus);
export default r;
