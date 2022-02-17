import express from "express";
import { getAll } from "../controllers/todoController.js";
export const TodoApp = express.Router();

TodoApp.route("/getAll").get(getAll);
