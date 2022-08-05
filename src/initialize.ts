// import { createConnection } from "./database";
import { errorHandler, notFoundHandler } from "./middleware/handlers";
// import { createRedisConnection } from "./database/redis";

export default async () => {
  // const redisConnection = await createRedisConnection();
  // const dbConnection = await createConnection();

  const app = (await import("./app")).default;
  const router = (await import("./router")).default;

  app.use(router);
  app.use(notFoundHandler);
  app.use(errorHandler);

  return {
    // redisConnection,
    // dbConnection,
    app,
  };
};
