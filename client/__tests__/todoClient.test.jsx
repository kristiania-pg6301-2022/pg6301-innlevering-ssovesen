import React from "react";
import ReactDOM from "react-dom";
import pretty from "pretty";
import { MemoryRouter } from "react-router-dom";
import { Frontpage } from "../pages/frontpage";
import { Todo } from "../components/todo";
import { TodoPage } from "../pages/todoPage";

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
    ReactDOM.unmountComponentAtNode(element);
  });

  it("should render todos page", () => {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/todos"]}>
        <TodoPage />
      </MemoryRouter>,
      element
    );
    expect(pretty(element.innerHTML)).toMatchSnapshot();
  });

  /*it("should render todo", () => {
    const todo = {
      id: 1,
      title: "Orjan should remember to test",
      text: "Orjan doesnt test enough, so i needs a reminder",
      completed: false,
    };
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/todos"]}>
        <Todo todo={todo} />
      </MemoryRouter>,
      element
    );
    expect(element.querySelector("h2").innerHTML).toEqual(todo.title);
  });*/
});
