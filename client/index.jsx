import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Frontpage } from "./pages/frontpage";
import { TodoPage } from "./pages/todoPage.jsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Frontpage />} />
      <Route path={"/todos"} element={<TodoPage />} />
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
