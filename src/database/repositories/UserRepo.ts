import { InferAttributes, WhereOptions } from "sequelize/types";
import User from "../models/User";

export class UserRepo {

  static model = User;

  static create = async (data: Parameters<typeof User.create<User>>[0]) => {
    return User.create(data);
  }

  static findOneByClause = async (where: WhereOptions<InferAttributes<User>>) => {
    return User.findOne({
      where,
    });
  }
}
