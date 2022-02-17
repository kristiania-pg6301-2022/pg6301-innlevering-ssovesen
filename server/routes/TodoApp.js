import express from "express";
import { getAll } from "../controllers/TodoController";
export const TodoApp = express.Router();

TodoApp.route("/getAll").get(getAll);
