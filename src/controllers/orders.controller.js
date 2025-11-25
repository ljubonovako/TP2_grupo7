import { models } from '../db/models/index.js';
import { exportOrdersToCsv } from '../utils/csv.js';

export async function createOrder(req, res, next) {
  try {
    const { items } = req.body; // [{productId, qty}]
    if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ message: 'Items requeridos' });
    const products = await models.Product.findAll({ where: { id: items.map(i => i.productId) }});
    const total = items.reduce((sum, i) => {
      const p = products.find(pr => pr.id === i.productId);
      if (!p) throw new Error('Producto no encontrado');
      return sum + (p.price * i.qty);
    }, 0);

    const order = await models.Order.create({ status:'pending', total, customerId: req.user.id });
    await models.OrderItem.bulkCreate(items.map(i => ({
      orderId: order.id, productId: i.productId, quantity: i.qty, price: products.find(p=>p.id===i.productId).price
    })));

    res.status(201).json(await models.Order.findByPk(order.id, { include: [models.OrderItem] }));
  } catch (e) { next(e); }
}

export async function updateStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const order = await models.Order.findByPk(id);
    if (!order) return res.status(404).json({ message: 'Pedido no encontrado' });
    order.status = status;
    await order.save();
    res.json(order);
  } catch (e) { next(e); }
}

export async function exportOrders(req, res, next) {
  try {
    const orders = await models.Order.findAll({
      include: [
        {
          model: models.User,
          as: 'customer',
          attributes: ['email']
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    const rows = orders.map(o => ({
      id: o.id,
      status: o.status,
      total: o.total,
      customerEmail: o.customer?.email || '',
      createdAt: o.createdAt.toISOString()
    }));

    const filePath = await exportOrdersToCsv(rows);

    return res.status(200).json({
      message: 'Archivo CSV generado correctamente',
      file: filePath
    });
  } catch (err) {
    next(err);
  }
}
