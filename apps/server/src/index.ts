import express, { Express, json } from "express";
import galleryRouter from "./routes/gallery.routes";

const app: Express = express();

const PORT = 4040;

app.use(express.json());
app.use("/api", galleryRouter);

app.listen(PORT, () => {
  console.log(`Server is running. PORT=${PORT}`);
});
