import { DataTypes, Model } from 'sequelize';

export default class Product extends Model {
  static initModel(sequelize) {
    Product.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      restaurantId: { type: DataTypes.INTEGER, allowNull: false }
    }, { sequelize, modelName: 'Product', tableName: 'products', timestamps: true });
  }
}
