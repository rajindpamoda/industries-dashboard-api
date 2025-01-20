import { Router, Request, Response } from "express";
import dataRouter from "./data.router";

const router = Router();
router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello, World!" });
});

router.use("/data", dataRouter); // Add the data router here

export default router;
