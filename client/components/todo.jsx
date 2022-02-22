import React from "react";
export const Todo = ({ todo }) => {
  const { title, text, completed } = todo;

  return (
    <li>
      <h1>{title}</h1>
      <p>{text}</p>
    </li>
  );
};
