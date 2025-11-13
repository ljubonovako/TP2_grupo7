import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
  static initModel(sequelize) {
    User.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.ENUM('admin','restaurant','courier','customer'), defaultValue: 'customer' }
    }, { sequelize, modelName: 'User', tableName: 'users', timestamps: true });

    User.addHook('beforeCreate', async (user) => {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    });
  }

  toJSON() {
    const { password, ...attrs } = this.get();
    return attrs;
  }
}
