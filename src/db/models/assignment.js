import { DataTypes, Model } from 'sequelize';

export default class Assignment extends Model {
  static initModel(sequelize) {
    Assignment.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      orderId: { type: DataTypes.INTEGER, allowNull: false },
      courierId: { type: DataTypes.INTEGER, allowNull: false }
    }, { sequelize, modelName: 'Assignment', tableName: 'assignments', timestamps: true });
  }
}
