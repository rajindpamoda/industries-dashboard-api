import request from "supertest";
import express, { Express } from "express";
import indexRouter from "../src/routes/v1/index.router";

const app: Express = express();

app.use(express.json());
app.use("/v1", indexRouter);

describe("Data API Endpoints", () => {
  it("should return all data on GET /v1/data", async () => {
    const response = await request(app).get("/v1/data");

    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();
    expect(Array.isArray(response.body.items)).toBe(true);
  });

  it("should handle errors gracefully on GET /v1/data", async () => {
    jest.mock("../assets/data/data.json", () => {
      throw new Error("Data file not found");
    });

    const response = await request(app).get("/api/v1/data");

    expect(response.status).toBe(404);
  });
});