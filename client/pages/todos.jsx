import React, { useEffect, useState } from "react";
import { Todo } from "../components/todo";

export function Todos() {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    fetch("/api/getAll")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </ul>
  );
}
