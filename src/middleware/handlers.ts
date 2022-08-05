import { Request, Response, NextFunction } from "express";
import { ApiError, InternalError, NotFoundError } from "../core/ApiError";
import { errorLogger } from "../core/Logger";
import config from "../config";

const logError = (err: Error, req: Request) => {
  errorLogger.error(err.message, {
    url: req.originalUrl,
    method: req.method,
    body: req.body,
    stack: err.stack,
  });
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
  } else {
    console.log(config.env.isDevelopment);
    if (config.env.isDevelopment) logError(err, req);
    ApiError.handle(new InternalError(), res);
  }
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => next(new NotFoundError());
