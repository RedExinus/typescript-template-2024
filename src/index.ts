import express from "express";
import cors from "cors";
import helmet from "helmet";
import "features/dotenv";
import { logger } from "features/";
import { appRouter } from "routers/";

(() => {
  const app = express();

  app.use(cors({}));
  app.use(helmet({}));
  app.use(express.json({}));

  app.use("api/", appRouter);

  const server = app.listen(process.env.APP_PORT, () => {
    logger.info(`${process.env.APP_NAME} server started.`);
    logger.info(`Listening port: ${process.env.APP_PORT}.`);
  });
})();
