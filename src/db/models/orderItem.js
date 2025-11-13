import { DataTypes, Model } from 'sequelize';

export default class OrderItem extends Model {
  static initModel(sequelize) {
    OrderItem.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      orderId: { type: DataTypes.INTEGER, allowNull: false },
      productId: { type: DataTypes.INTEGER, allowNull: false }
    }, { sequelize, modelName: 'OrderItem', tableName: 'order_items', timestamps: true });
  }
}
