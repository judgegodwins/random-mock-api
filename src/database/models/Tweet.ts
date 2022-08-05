import { Model, DataTypes, Sequelize } from "sequelize";
import GenericModel, { genericField } from "./generic";

class Tweet extends GenericModel<Tweet> {
  declare content: string;
  // declare user: 
}
