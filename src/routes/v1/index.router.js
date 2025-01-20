"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_router_1 = __importDefault(require("./data.router"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
});
router.use("/data", data_router_1.default); // Add the data router here
exports.default = router;
