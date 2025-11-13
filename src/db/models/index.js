import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_DIALECT, DB_PORT } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT ? Number(DB_PORT) : 8080,
  dialect: DB_DIALECT
});


import User from './user.js';
import Restaurant from './restaurant.js';
import Product from './product.js';
import Order from './order.js';
import OrderItem from './orderItem.js';
import Assignment from './assignment.js';

User.initModel(sequelize);
Restaurant.initModel(sequelize);
Product.initModel(sequelize);
Order.initModel(sequelize);
OrderItem.initModel(sequelize);
Assignment.initModel(sequelize);

// Relaciones
Restaurant.hasMany(Product, { foreignKey: 'restaurantId' });
Product.belongsTo(Restaurant, { foreignKey: 'restaurantId' });

User.hasMany(Order, { foreignKey: 'customerId', as: 'orders' });
Order.belongsTo(User, { foreignKey: 'customerId', as: 'customer' });

Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
Product.hasMany(OrderItem, { foreignKey: 'productId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Assignment, { foreignKey: 'courierId', as: 'assignments' });
Assignment.belongsTo(User, { foreignKey: 'courierId', as: 'courier' });
Order.hasOne(Assignment, { foreignKey: 'orderId' });
Assignment.belongsTo(Order, { foreignKey: 'orderId' });

export const models = { User, Restaurant, Product, Order, OrderItem, Assignment };
