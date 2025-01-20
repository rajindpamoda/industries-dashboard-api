"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_router_1 = __importDefault(require("./routes/v1/index.router"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Middleware to parse request body (optional but often needed)
app.use(express_1.default.json());
// Use Gzip compression middleware
app.use((0, compression_1.default)());
// User Cors middleware
app.use((0, cors_1.default)());
// Use routes
app.use("/v1", index_router_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
