import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, ModelAttributes } from "sequelize";

export const genericField = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

class GenericModel<T extends Model> extends Model<InferAttributes<T>, InferCreationAttributes<T>> {
  declare id: CreationOptional<string>;
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;
}

export default GenericModel;