import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./modules/products/products.route";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import { PaymentRoute } from "./modules/payment/payment.route";
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://server-two-mauve.vercel.app"],
  })
);

app.use("/api/v1", ProductRoute);
app.use("/api/v1", PaymentRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next Level Developers 👋!!!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
