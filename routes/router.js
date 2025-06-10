// Imports
    import {Router} from "express";

    import noteController from "../controllers/noteController.js";
    import userController from "../controllers/userController.js";

    import authController from "../controllers/authController.js";

// Constants
    export const router = Router();

// Routes
    router.get("/", (req, res) => {
        res.send("Home");
    });

    // Notes

        // CRUD: Create
            router.get(
                "/notes/add",
                authController.isAuthenticated,
                noteController.addNote);

            router.post("/notes/add", noteController.createNote);

        // CRUD: Read
            router.get(
                "/notes",
                authController.isAuthenticated,
                noteController.getNotes
            );

            router.get("/notes/:slug", noteController.getNoteBySlug);

        // CRUD: Update
            router.get(
                "/notes/:id/edit", 
                authController.isAuthenticated,
                noteController.editNote
            );

            router.post(
                "/notes/:id/edit", 
                authController.isAuthenticated,
                noteController.updateNote
            );

        // CRUD: Delete
            router.delete(
                "/notes/:id/delete",
                authController.isAuthenticated,
                noteController.deleteNote
            );

    // Users
        
        // Register
            router.get("/register", userController.registerForm);
            router.post(
                "/register", 
                userController.validateRegister,
                userController.register
            );

        // Login
            router.get("/login", userController.loginForm);
            router.post("/login", authController.login);
            router.get("/logout", authController.isAuthenticated, authController.logout)