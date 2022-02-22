import React from "react";
export const Todo = (props) => {
  return (
    <li>
      <h1>{props.todo.title}</h1>
      <p>{props.todo.text}</p>
      <button
        onClick={() => {
          props.whenCompleted(props.todo);
        }}
      >
        {props.todo.completed ? "Done" : "Todo"}
      </button>
      <button
        onClick={() => {
          props.whenDeleted(props.todo);
        }}
      >
        Delete
      </button>
    </li>
  );
};
