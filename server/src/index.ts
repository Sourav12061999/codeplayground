import express from "express";

const app = express();

app.use(express.json());

app.get("/health-check", (req, res) => {
    res.status(200).send("OK");
})