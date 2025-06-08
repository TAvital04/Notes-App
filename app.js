// Imports
    import express from "express";

    import {router} from "./routes/router.js"

    import {fileURLToPath} from "url";
    import path from "path";

// Constants
    export const app = express();

// View engine (ejs)
    app.set("view engine", "ejs");
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    app.set("views", path.join(__dirname, "views"));

// Middleware
    app.use(express.json());

    app.use(express.urlencoded({extended:true}));

// Router
    app.use("/", router);

