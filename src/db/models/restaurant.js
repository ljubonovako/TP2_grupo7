import { DataTypes, Model } from 'sequelize';

export default class Restaurant extends Model {
  static initModel(sequelize) {
    Restaurant.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: true }
    }, { sequelize, modelName: 'Restaurant', tableName: 'restaurants', timestamps: true });
  }
}
