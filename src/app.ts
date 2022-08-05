import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import { errorLogger } from "./core/Logger";
import config from "./config";

process.on("uncaughtException", (e) => {
  errorLogger.error(e);
});

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({ extended: true, limit: "10mb", parameterLimit: 50000 })
);
app.use(morgan(config.env.isProduction ? 'common' : 'dev'));

export default app;
