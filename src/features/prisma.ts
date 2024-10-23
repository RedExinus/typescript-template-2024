import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";
import logger from "./logger";

/** Gets Database client. */
const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
  ],
});

prisma.$on("query", (e: Prisma.QueryEvent) => {
  logger.info(`Query:    ${e.query}`);
  logger.info(`Params:   ${e.params}`);
  logger.info(`Duration: ${e.duration}ms`);
});

prisma.$on("error", (e: Prisma.LogEvent) => {
  logger.error(`An error occurred while working with database.`);
  logger.error(`Timestamp: ${e.timestamp}`);
  logger.error(`Message: ${e.message}`);
});

try {
  prisma.$connect();
} catch (error) {
  if (error instanceof PrismaClientInitializationError) {
    logger.error("Prisma failed to connect to the database.", error);
  }
}

export default prisma;
