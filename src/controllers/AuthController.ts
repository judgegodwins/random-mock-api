import { NextFunction, Request, Response } from "express";
import { SuccessResponse } from "../core/ApiResponse";
import * as AuthService from "../services/Auth";
import asyncHandler from "../utils/asyncHandler";

export default class AuthController {
  static register = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const result = await AuthService.register(req.body);

      new SuccessResponse("Welcome to twitter mini", result).send(res);
    }
  );
}
