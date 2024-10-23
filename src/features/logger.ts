import winston from "winston";

/** Gets Application logger. */
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === "production" ? "error" : "debug",
    }),
    new winston.transports.File({
      filename: `logs/${process.env.NODE_ENV}.log`,
      level: process.env.NODE_ENV === "production" ? "error" : "debug",
    }),
  ],
});

export default logger;
