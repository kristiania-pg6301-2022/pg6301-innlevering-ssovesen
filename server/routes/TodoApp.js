import express from "express";
import {
  getAll,
  addTodo,
  getTodo,
  deleteTodo,
} from "../controllers/todoController.js";
export const TodoApp = express.Router();

TodoApp.route("/getAll").get(getAll);
TodoApp.route("/addTodo").post(addTodo);
TodoApp.route("/todo/:id").get(getTodo).delete(deleteTodo);
