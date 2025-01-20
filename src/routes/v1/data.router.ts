import { Router } from "express";
import {DataController} from "../../controllers/data.controller";

const dataRouter = Router();
dataRouter.get("/", DataController.getAllData);

export default dataRouter;
