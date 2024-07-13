"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_route_1 = require("./modules/products/products.route");
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const payment_route_1 = require("./modules/payment/payment.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173", "https://server-two-mauve.vercel.app"],
}));
app.use("/api/v1", products_route_1.ProductRoute);
app.use("/api/v1", payment_route_1.PaymentRoute);
app.get("/", (req, res) => {
    res.send("Hello Next Level Developers 👋!!!");
});
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
