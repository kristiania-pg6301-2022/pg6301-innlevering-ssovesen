import express from "express";
import { randomTodos } from "../todos.js";

export const App = express.Router();

App.get("/getAll", (req, res) => {
  const { id, title, text, completed } = randomTodos();
  res.status(200);
  res.json({ id, title, text, completed });
});
