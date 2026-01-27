import "dotenv/config";
import express from "express";

const app = express()
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Github Actions X Nodejs"
    })
})

app.get("/heath", (req, res) => {
    return res.json({
        success: true,
        message: "Server is healthy"
    })
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})

