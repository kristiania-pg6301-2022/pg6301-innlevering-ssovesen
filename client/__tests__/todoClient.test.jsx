import React from "react";
import ReactDOM from "react-dom";
import pretty from "pretty";
import { MemoryRouter } from "react-router-dom";
import { Frontpage } from "../pages/frontpage";
import { Todo } from "../components/todo";
import { Todos } from "../pages/todos";

describe("Client tests", () => {
  it("should display page ", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Frontpage />
      </MemoryRouter>,
      element
    );
    expect(pretty(element.innerHTML)).toMatchSnapshot();
  });

  it("should render todos page", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/todos"]}>
        <Todos />
      </MemoryRouter>,
      element
    );
    expect(pretty(element.innerHTML)).toMatchSnapshot();
  });

  it("should render todo", () => {
    const todo = {
      id: 1,
      title: "Orjan should remember to test",
      text: "Orjan doesnt test enough, so i needs a reminder",
      completed: false,
    };
    const element = document.createElement("div");
    ReactDOM.render(<Todo todo={todo} />, element);
    expect(element.querySelector("h2").innerHTML).toEqual(todo.title);
  });
});
