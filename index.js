// Imports
    import dotenv from "dotenv";
    dotenv.config();

    const {app} = await import("./app.js");

    const {connect} = await import("./connect.js");

// Connect to the app
    app.listen(process.env.PORT, () => {
        console.log(`(1) Server running at localhost:${process.env.PORT} :D`);
    })

// Connect to MongoDB
    try {
        await connect(process.env.DB_CONN);
        console.log(`(2) MongoDB connected at ${process.env.DB_CONN} :D`);
    } catch {
        console.log("(2) MonogDB not connected :P");
    }