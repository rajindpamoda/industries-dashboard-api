"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
const getAllData = (req, res) => {
    try {
        const data = require("./../../assets/data/data.json");
        res.json(data);
    }
    catch (e) {
        console.log(e);
        if (e instanceof Error) {
            res.status(500).json({ message: e.message });
        }
        else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};
exports.DataController = {
    getAllData,
};
