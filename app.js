// Imports
    import express from "express";
    import {router} from "./routes/router.js"

// Constants
    export const app = express();

// Middleware
    app.use(express.json());

// Router
    app.use("/", router);

