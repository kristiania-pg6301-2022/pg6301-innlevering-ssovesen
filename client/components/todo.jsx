import React from "react";

export const Todo = (props) => {
  const { title, text, completed } = props.todo;
  return (
    <li className={`${completed ? "completed" : ""}`}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div>
        <button
          className={`${completed ? "button-completed" : ""}`}
          onClick={() => {
            props.whenCompleted(props.todo);
          }}
        >
          {completed ? "Done" : "Todo"}
        </button>
        <button
          onClick={() => {
            props.whenDeleted(props.todo);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
