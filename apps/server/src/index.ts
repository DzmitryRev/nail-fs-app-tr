import express, { Express } from "express";

const app: Express = express();

const PORT = 4040;

app.listen(PORT, () => {
  console.log(`Server is running. PORT=${PORT}`);
});
