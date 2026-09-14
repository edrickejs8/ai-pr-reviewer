import "./env.js"
import express from "express";
import { createNodeMiddleware } from "@octokit/webhooks";
import { webhooks } from "./github-app.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(createNodeMiddleware(webhooks, { path: "/api/webhook" }));

app.get("/", (req, res) => {
    res.send("AI PR Reviewer is alive.");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});