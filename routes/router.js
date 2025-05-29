// Imports
    import {Router} from "express";
    import noteController from "../controllers/noteController.js";

// Constants
    export const router = Router();

// Routes
    router.get("/", (req, res) => {
        res.send("Home");
    });

    // CRUD: Create
        router.get("/add", noteController.addNote);
        router.post("/add", noteController.createNote);

    // CRUD: Read
        router.get("/notes", noteController.getNotes);