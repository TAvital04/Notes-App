import express from "express";
import {router} from "./routes/router.js"

export const app = express();

app.use("/", router);