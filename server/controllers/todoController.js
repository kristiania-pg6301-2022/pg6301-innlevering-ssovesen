import { randomTodos, Todos } from "../todos.js";

//@desc Get all todos
//@route GET /api/getAll
//@access Public
export const getAll = (req, res) => {
  try {
    const { id, title, text, completed } = randomTodos();
    res.status(200).json({
      id,
      title,
      text,
      completed,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

//@desc Create a todo
//@route POST /api/addTodo
//@access Public
export const addTodo = (req, res) => {
  try {
    const { id, title, text, completed } = req.body;
    if (id && title && text) {
      Todos.push({
        id,
        title,
        text,
        completed,
      });
      res.status(200).json({
        message: "Todo added successfully",
      });
    } else {
      res.status(400).json({
        message: "Please provide all the required fields",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
