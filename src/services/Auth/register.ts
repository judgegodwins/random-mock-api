import { omit } from "lodash";
import { BadRequestError } from "../../core/ApiError";
import { UserRepo } from "../../database/repositories/UserRepo";
import { bcryptHash, wrapServiceAction } from "../../utils";
import { RegisterRequest } from "../../validators/auth";

export default wrapServiceAction({
  schema: RegisterRequest,
  handler: async (params) => {
    const existingUser = await UserRepo.findOneByClause({
      username: params.username,
    });

    if (existingUser) throw new BadRequestError("User with username exists");

    const user = await UserRepo.create({
      ...params,
      password: await bcryptHash(params.password),
    });

    return omit(user, UserRepo.model.sensitiveFields);
  },
});
