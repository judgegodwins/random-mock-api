import { Model, DataTypes, Sequelize } from "sequelize";
import GenericModel, { genericField } from "./generic";

class User extends GenericModel<User> {
  declare username: string;
  declare password: string;


  static sensitiveFields = ['password'];

  static associate(models: { [key: string]: Model }) {
    console.log("FOR ASSOCIATIONS");
  }
}

export const init = (sequelize: Sequelize) => {
  User.init(
    {
      ...genericField,
      username: {
        type: new DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: new DataTypes.STRING(255),
        allowNull: false,
      },
    },
    { sequelize }
  );

  return User;
};

export default User;
