import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export class Application extends Model {
  public id!: number;
  public jobId!: number;
  public applicantName!: string;
  public coverLetter!: string; // Добавляем поле coverLetter
  public createdAt!: Date;
  public updatedAt!: Date;
}

Application.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    applicantName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coverLetter: {
      // Добавлено поле coverLetter
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "applications",
  }
);
