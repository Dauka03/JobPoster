import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database'; // Обновите путь

export class Job extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public location!: string;
  public salary!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Job.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING, // Изменил на STRING для более компактного текста
    allowNull: false,
  },
  salary: {
    type: DataTypes.FLOAT, // Изменил на FLOAT для числовых значений
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'jobs',
});
