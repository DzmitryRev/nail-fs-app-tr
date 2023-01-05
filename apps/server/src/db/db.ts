import pgp, { IInitOptions, IMain } from "pg-promise";
import promise from "bluebird";

const initOptions: IInitOptions = {
  promiseLib: promise,
};

const cn = {
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "D9056802",
  allowExitOnIdle: true,
};

const db = pgp(initOptions)(cn);

export { db };
