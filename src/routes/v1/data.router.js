"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_controller_1 = require("../../controllers/data.controller");
const dataRouter = (0, express_1.Router)();
dataRouter.get("/", data_controller_1.DataController.getAllData);
exports.default = dataRouter;
