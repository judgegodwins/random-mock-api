import { NextFunction, Request, Response } from "express";
import { SuccessResponse, PaginationResponse } from "../core/ApiResponse";
import * as RandomService from "../services/Random";
import asyncHandler from "../utils/asyncHandler";

export default class RandomController {
  static getRandomWords = asyncHandler(
    async (req: Request, res: Response) => {
      console.log(req.query);
      const result = await RandomService.getRandomWords({
        page: +(req.query.page as string),
        limit: +(req.query.limit as string)
      });

      new PaginationResponse("Random words", result).send(res);
    }
  );
}
