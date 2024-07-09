import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./modules/products/products.route";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", ProductRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next Level Developers 👋!!!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
