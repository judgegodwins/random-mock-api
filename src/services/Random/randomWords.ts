import RandomRepo from "../../database/repos/RandomRepo";
import { wrapServiceAction } from "../../utils";
import { calcSkip } from "../../utils/pagination";
import { PaginationRequest } from "../../validators";
import { RegisterRequest } from "../../validators/auth";

export default wrapServiceAction({
  schema: PaginationRequest,
  handler: async (params) => {

    const skip = calcSkip(params.page, params.limit);

    const words = await RandomRepo.getRandomWords(skip, params.limit);

    return words;
  },
});