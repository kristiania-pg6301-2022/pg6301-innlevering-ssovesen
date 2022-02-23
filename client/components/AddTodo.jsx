import { useState } from "react";

export function AddTodo({ getTodo }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(event) {
    const id = Math.floor(Math.random() * 10000);
    event.preventDefault();
    fetch("/api/addTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        text,
        completed: false,
      }),
    })
      .then((r) => r.json())
      .then(() => {
        getTodo();
      });
    setTitle("");
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
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
