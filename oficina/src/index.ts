import env from "dotenv";
import express from "express";

env.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
