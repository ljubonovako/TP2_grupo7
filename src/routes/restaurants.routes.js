import { Router } from 'express';
import { createRestaurant, listRestaurants } from '../controllers/restaurants.controller.js';
import { authenticate, authorize } from '../middlewares/authJwt.js';

const r = Router();
r.get('/', listRestaurants);
r.post('/', authenticate, authorize('admin'), createRestaurant);
export default r;
