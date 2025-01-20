"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const index_router_1 = __importDefault(require("../src/routes/v1/index.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/v1", index_router_1.default);
describe("Data API Endpoints", () => {
    it("should return all data on GET /v1/data", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/v1/data");
        expect(response.status).toBe(200);
        expect(response.body).not.toBeNull();
        expect(Array.isArray(response.body.items)).toBe(true);
    }));
    it("should handle errors gracefully on GET /v1/data", () => __awaiter(void 0, void 0, void 0, function* () {
        jest.mock("../assets/data/data.json", () => {
            throw new Error("Data file not found");
        });
        const response = yield (0, supertest_1.default)(app).get("/api/v1/data");
        expect(response.status).toBe(404);
    }));
});
