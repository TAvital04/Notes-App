// Imports
    import {Router} from "express";
    import noteController from "../controllers/noteController.js";

// Constants
    export const router = Router();

// Routes
    router.get("/", (req, res) => {
        res.send("Home");
    });

    // Notes

        // CRUD: Create
            router.get("/add", noteController.addNote);
            router.post("/add", noteController.createNote);

        // CRUD: Read
            router.get("/notes", noteController.getNotes);
            router.get("/note/:slug", noteController.getNoteBySlug);

        // CRUD: Update
            router.get("/notes/:id/edit", noteController.editNote);
            router.post("/notes/:id/edit", noteController.updateNote);

        // CRUD: Delete
            router.delete("/notes/:id", noteController.deleteNote);