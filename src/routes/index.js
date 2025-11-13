import { Router } from 'express';
import authRoutes from './auth.routes.js';
import restaurantsRoutes from './restaurants.routes.js';
import productsRoutes from './products.routes.js';
import ordersRoutes from './orders.routes.js';
import { health } from '../controllers/health.controller.js';

const router = Router();

router.get('/health', health);
router.use('/auth', authRoutes);
router.use('/restaurants', restaurantsRoutes);
router.use('/products', productsRoutes);
router.use('/orders', ordersRoutes);

export default router;
