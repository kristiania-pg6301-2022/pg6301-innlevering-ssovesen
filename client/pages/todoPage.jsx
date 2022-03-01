import React, { useEffect, useState } from "react";
import { Todo } from "../components/todo";
import { AddTodo } from "../components/AddTodo";
import { useLoader } from "../utils/hooks/useLoader";
import { fetchJSON } from "../utils/httpErrorHandler";

export function TodoPage() {
  const {
    loading,
    error,
    data: todoList,
    reload,
  } = useLoader(async () => await fetchJSON("/api/getAll"));

  function onDelete(todo) {
    console.log(todo, "todo");
    fetch(`/api/todo/${todo.id}`, { method: "DELETE" }).then((response) =>
      response.json().then((data) => console.log(data))
    );
    reload();
  }

  function onComplete(todo) {
    let status;
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
    reload();
  }

  return (
    <>
      <h1>Welcome to this awesome todo app</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="app">
        <AddTodo getTodo={todoList} reload={reload} />
        <div>
          {
            <ul>
              {todoList?.map((todo) => {
                if (!todo.completed) {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      whenDeleted={onDelete}
                      whenCompleted={onComplete}
                    />
                  );
                }
              })}
            </ul>
          }
          <h1>Completed</h1>
          <ul>
            {todoList?.map((todo) => {
              if (todo.completed) {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    whenDeleted={onDelete}
                    whenCompleted={onComplete}
                  />
                );
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
