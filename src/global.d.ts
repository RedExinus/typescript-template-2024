namespace NodeJS {
  interface ProcessEnv {
    /** Gets working environment. */
    NODE_ENV: string;

    /** Gets application`s name. */
    APP_NAME: string;

    /** Gets application`s port. */
    APP_PORT: number;

    /** Gets databse connection string. */
    DB_URL: string;
  }
}
