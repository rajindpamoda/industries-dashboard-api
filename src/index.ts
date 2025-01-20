import express, { Express } from "express";
import compression from "compression";
import dotenv from "dotenv";
import routes from "./routes/v1/index.router";
import cors from  "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// Middleware to parse request body (optional but often needed)
app.use(express.json());

// Use Gzip compression middleware
app.use(compression());

// User Cors middleware
app.use(cors());

// Use routes
app.use("/v1", routes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});