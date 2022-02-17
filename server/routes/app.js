import express from "express";

export const App = express().Router();

App.get("/getAll", (req, res) => {
  res.sendStatus(200).json({ message: "This is all" });
});
