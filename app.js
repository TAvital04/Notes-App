// Imports
    import express from "express";
    import {router} from "./routes/router.js"

    import {connect} from "./connect.js";

// Constants
    export const app = express();

// Main
    // Connect to MongoDB
        try {
            await connect(process.env.DB_CONN);
            console.log(`(1) MongoDB connected at ${process.env.DB_CONN} :D`);
        } catch {
            console.log("(1) MonogDB not connected :P");
        }

    // Configure the app
        app.use("/", router);