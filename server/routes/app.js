import express from "express";

export const App = express.Router();

App.get("/getAll", (req, res) => {
  res.status(200);
  res.json({ message: "This is all" });
});
