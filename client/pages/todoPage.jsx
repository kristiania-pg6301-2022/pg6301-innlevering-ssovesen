import React, { useEffect, useState } from "react";
import { Todo } from "../components/todo";
import { AddTodo } from "../components/AddTodo";
import { useLoader } from "../utils/hooks/useLoader";
import {
  fetchJSON,
  deleteJSON,
  requestJSON,
} from "../utils/httpRequestHandlers";

export function TodoPage() {
  const {
    loading,
    error,
    data: todoList,
    reload,
  } = useLoader(async () => await fetchJSON("/api/getAll"));

  async function onDelete(todo) {
    await deleteJSON(`/api/todo/${todo.id}`);
    await reload();
  }

  async function onComplete(todo) {
    let status;
    todo.completed ? (status = false) : (status = true);
    await requestJSON(`/api/todo/${todo.id}`, { completed: status }, "PUT");
    await reload();
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
