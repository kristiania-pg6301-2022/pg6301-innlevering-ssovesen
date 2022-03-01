import { useState } from "react";
import React from "react";
import { postJSON } from "../utils/httpErrorHandler";

export function AddTodo({ getTodo, reload }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  async function postTodo(e) {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    await postJSON("/api/addTodo", { id, title, text });
    reloadTodo();
  }

  const reloadTodo = () => {
    setTitle("");
    setText("");
    reload();
  };

  return (
    <form onSubmit={postTodo}>
      <div>
        Title:{" "}
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        Text{" "}
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
