import { randomTodos } from "../todos.js";

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
