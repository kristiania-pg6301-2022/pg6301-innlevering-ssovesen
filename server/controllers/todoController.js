import { randomTodos, Todos } from "../todos.js";

//@desc Get all todos
//@route GET /api/getAll
//@access Public
export const getAll = (req, res) => {
  if (Todos.length <= 0) {
    res.status(404).json({
      message: "No todos found",
    });
  } else {
    res.json(Todos);
  }
};

//@desc Create a todo
//@route POST /api/addTodo
//@access Public
export const addTodo = (req, res) => {
  const { id, title, text, completed } = req.body;
  const todoExists = Todos.find((todo) => todo.id === id);
  if (todoExists) {
    res.status(400).json({
      message: "Todo already exists",
    });
  } else if (title && text) {
    const newTodo = {
      id,
      title,
      text,
      completed,
    };
    Todos.push(newTodo);
    res.json({ message: "Todo added successfully" });
  } else {
    res.status(400).json({
      message: "Please provide all required fields",
    });
  }
};

//@desc Get a todo
//@route GET /api/getTodo/:id
//@access Public
export const getTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = Todos.find((todo) => todo.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({
      message: "Todo not found",
    });
  }
};

//@desc Delete a todo
//@route DELETE /api/todo/:id
//@access Public
export const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = Todos.find((todo) => todo.id === id);
  if (todo) {
    const index = Todos.indexOf(todo);
    Todos.splice(index, 1);
    res.json({ message: "Todo deleted successfully" });
  } else {
    res.status(404).json({
      message: "Todo not found",
    });
  }
};

//@desc Update a todo
//@route PUT /api/todo/:id
//@access Public
export const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = Todos.find((todo) => todo.id === id);
  if (!todo) {
    res.status(404).json({
      message: "Todo not found",
    });
  } else {
    const { completed } = req.body;
    todo.completed = completed;
    if (completed) {
      res.json({ message: "Todo completed successfully" });
    } else {
      res.json({ message: "Todo set to not completed" });
    }
  }
};
