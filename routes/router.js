// Imports
    import {Router} from "express";

    import noteController from "../controllers/noteController.js";
    import userController from "../controllers/userController.js";

// Constants
    export const router = Router();

// Routes
    router.get("/", (req, res) => {
        res.send("Home");
    });

    // Notes

        // CRUD: Create
            router.get("/notes/add", noteController.addNote);
            router.post("/notes/add", noteController.createNote);

        // CRUD: Read
            router.get("/notes", noteController.getNotes);
            router.get("/notes/:slug", noteController.getNoteBySlug);

        // CRUD: Update
            router.get("/notes/:id/edit", noteController.editNote);
            router.post("/notes/:id/edit", noteController.updateNote);

        // CRUD: Delete
            router.delete("/notes/:id/delete", noteController.deleteNote);

    // Users
        
        // Register
            router.get("/register", userController.registerForm);
            router.post(
                "/register", 
                userController.validateRegister,
                userController.register
            );