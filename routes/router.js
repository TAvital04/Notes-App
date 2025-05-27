import {Router} from "express";
import noteController from "../controllers/noteController.js";

export const router = Router();

router.get("/", (req, res) => {
    res.send("Home");
});

router.get("/notes", noteController.getNotes)