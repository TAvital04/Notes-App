// Imports
    import {Router} from "express";

    import noteController from "../controllers/noteController.js";
    import userController from "../controllers/userController.js";

    import authController from "../controllers/authController.js";
    import {catchErrors} from "../handlers/errorHandlers.js";

// Constants
    export const router = Router();

// Routes
    router.get("/", (req, res) => {
        res.redirect("/notes");
    });

    // Notes

        // CRUD: Create
            router.get(
                "/notes/add",
                authController.isAuthenticated,
                catchErrors(noteController.addNote)
            );

            router.post(
                "/notes/add", 
                catchErrors(noteController.createNote)
            );

        // CRUD: Read
            router.get(
                "/notes",
                authController.isAuthenticated,
                catchErrors(noteController.getNotes)
            );

            router.get(
                "/notes/:slug", 
                noteController.getNoteBySlug
            );

        // CRUD: Update
            router.get(
                "/notes/:id/edit", 
                authController.isAuthenticated,
                noteController.editNote
            );

            router.post(
                "/notes/:id/edit", 
                authController.isAuthenticated,
                catchErrors(noteController.updateNote)
            );

        // CRUD: Delete
            router.delete(
                "/notes/:id/delete",
                authController.isAuthenticated,
                catchErrors(noteController.deleteNote)
            );

    // Users
        
        // Register
            router.get(
                "/register", 
                userController.registerForm
            );
            router.post(
                "/register", 
                userController.validateRegister,
                userController.register
            );

        // Login
            router.get(
                "/login", 
                userController.loginForm
            );
            router.post(
                "/login", 
                authController.login
            );
            router.get(
                "/logout", 
                authController.isAuthenticated, 
                authController.logout
            );