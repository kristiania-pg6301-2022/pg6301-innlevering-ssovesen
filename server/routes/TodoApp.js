import express from "express";
import { getAll, addTodo } from "../controllers/todoController.js";
export const TodoApp = express.Router();

TodoApp.route("/getAll").get(getAll);
TodoApp.route("/addTodo").post(addTodo);
