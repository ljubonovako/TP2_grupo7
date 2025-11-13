import { models } from '../db/models/index.js';

export async function createProduct(req, res, next) {
  try {
    const product = await models.Product.create(req.body);
    res.status(201).json(product);
  } catch (e) { next(e); }
}
export async function listProducts(req, res, next) {
  try {
    const where = {};
    if (req.query.restaurantId) where.restaurantId = req.query.restaurantId;
    const products = await models.Product.findAll({ where });
    res.json(products);
  } catch (e) { next(e); }
}
