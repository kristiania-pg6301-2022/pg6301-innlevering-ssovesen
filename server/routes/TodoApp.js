import express from "express";
import { getAll, addTodo, getTodo } from "../controllers/todoController.js";
export const TodoApp = express.Router();

TodoApp.route("/getAll").get(getAll);
TodoApp.route("/addTodo").post(addTodo);
TodoApp.route("/getTodo/:id").get(getTodo);
