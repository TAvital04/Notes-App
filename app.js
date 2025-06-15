// Imports
    import express from "express";
    import morgan from "morgan";

    import {router} from "./routes/router.js"

    import {fileURLToPath} from "url";
    import path from "path";

    import methodOverride from "method-override";

    import passport from "passport";
    import "./handlers/passport.js";
    import session from "express-session";
    import MongoStore from "connect-mongo";

    import {notFound} from "./handlers/errorHandlers.js";

// Constants
    export const app = express();

// View engine (ejs)
    app.set("view engine", "ejs");
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    app.set("views", path.join(__dirname, "views"));

    app.use(express.static(path.join(__dirname, "public")));

// Middleware
    app.use(express.json());

    app.use(express.urlencoded({extended:true}));

    app.use(methodOverride("_method"));

    app.use(morgan("dev"));

    app.use(
        session({
            secret: process.env.PASSPORT_SECRET,
            key: process.env.PASSPORT_COOKIE_KEY,
            resave: false,
            saveUninitialized: false,
            store: MongoStore.create({
                mongoUrl: process.env.DB_CONN
            })
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());
    
    // Variables accessible to the views folder (ejs)
    app.use((req, res, next) => {
        res.locals.user = req.user;
        next();
    });

// Router
    app.use("/", router);

// Middleware 2
    app.use(notFound);

