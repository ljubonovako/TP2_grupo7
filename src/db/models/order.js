import { DataTypes, Model } from 'sequelize';

export default class Order extends Model {
  static initModel(sequelize) {
    Order.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      status: { type: DataTypes.ENUM('pending','preparing','assigned','on_the_way','delivered','cancelled'), defaultValue: 'pending' },
      total: { type: DataTypes.FLOAT, allowNull: false },
      customerId: { type: DataTypes.INTEGER, allowNull: false }
    }, { sequelize, modelName: 'Order', tableName: 'orders', timestamps: true });
  }
}
