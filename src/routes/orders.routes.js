import { Router } from 'express';
import { createOrder, updateStatus, exportOrders } from '../controllers/orders.controller.js';
import { authenticate, authorize } from '../middlewares/authJwt.js';

const r = Router();
r.get('/export', authenticate, authorize('admin'), exportOrders);
r.post('/', authenticate, authorize('customer'), createOrder);
r.put('/:id/status', authenticate, authorize('restaurant','admin'), updateStatus);
export default r;
