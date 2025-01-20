import { Request, Response } from "express";
import {IndustryItemsResponse} from "../types/types";

const getAllData = (req: Request, res: Response) => {
    try {
        const data: IndustryItemsResponse = require("./../../assets/data/data.json");
        res.json(data);
    } catch (e) {
        console.log(e)
        if (e instanceof Error) {
            res.status(500).json({ message: e.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};

export const DataController = {
    getAllData,
}
