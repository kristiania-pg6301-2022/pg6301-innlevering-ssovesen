import React, { useEffect, useState } from "react";
import { Todo } from "../components/todo";

export function Todos() {
  const [todos, setTodos] = useState([]);

  function onComplete(todo) {
    let status = undefined;
    todo.completed ? (status = false) : (status = true);

    console.log("onComplete works", todo.completed);

    const requestOptions = {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: status }),
    };

    fetch(`/api/todo/${todo.id}`, requestOptions).then((response) =>
      response.json().then((data) => console.log(data))
    );
    getTodos();
  }

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
        return <Todo key={todo.id} todo={todo} whenCompleted={onComplete} />;
      })}
    </ul>
  );
}
