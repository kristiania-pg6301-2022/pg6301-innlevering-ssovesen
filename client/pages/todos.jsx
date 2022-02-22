import React, { useEffect, useState } from "react";
import { Todo } from "../components/todo";

export function Todos() {
  const [todos, setTodos] = useState([]);

  function onComplete(todo) {
    console.log("onComplete works");
    const requestOptions = {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: false }),
    };

    fetch(`/api/todo/${todo.id}`, requestOptions).then((response) =>
      console.log(response.status)
    );
  }

  const getTodos = () => {
    fetch("/api/getAll")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  };

  useEffect(() => {
    getTodos();
  }, [onComplete]);

  return (
    <ul>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} whenCompleted={onComplete} />;
      })}
    </ul>
  );
}
