import { models } from '../db/models/index.js';

export async function createRestaurant(req, res, next) {
  try {
    const r = await models.Restaurant.create(req.body);
    res.status(201).json(r);
  } catch (e) { next(e); }
}
export async function listRestaurants(req, res, next) {
  try {
    const rs = await models.Restaurant.findAll();
    res.json(rs);
  } catch (e) { next(e); }
}
