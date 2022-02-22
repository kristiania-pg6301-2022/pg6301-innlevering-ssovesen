import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Frontpage } from "./pages/frontpage";
import { Todos } from "./pages/todos.jsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Frontpage />} />
      <Route path={"/todo"} element={<Todos />} />
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
