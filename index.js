import dotenv from "dotenv";
dotenv.config();

const {app} = await import("./app.js");
console.log("(2) app.js loaded :D");

app.listen(process.env.PORT, () => {
    console.log(`(3) Server running at ${process.env.PORT} :D`);
})