import dotenv from "dotenv";
dotenv.config();

const {app} = await import("./app.js");
console.log("(1) app.js is loaded :)");

app.listen(process.env.PORT, () => {
    console.log(`(2) Server running on port ${process.env.PORT} :)`);
})