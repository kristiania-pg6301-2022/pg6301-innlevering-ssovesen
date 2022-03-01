import React from "react";
import ReactDOM from "react-dom";
import pretty from "pretty";
import { MemoryRouter } from "react-router-dom";
import { Frontpage } from "../pages/frontpage";
import { Todo } from "../components/todo";
import { TodoPage } from "../pages/todoPage";
import { Simulate } from "react-dom/test-utils";
import { AddTodo } from "../components/AddTodo";

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

  it("should complete todo", () => {
    const todo = {
      title: "Test Todo",
      text: "Test Description",
      completed: false,
    };
    const onComplete = jest.fn();
    const onDelete = jest.fn();

    const element = document.createElement("div");

    ReactDOM.render(<Todo todo={todo} whenCompleted={onComplete} />, element);
    console.log(element.querySelector("button"));
    Simulate.click(element.querySelector("button"));
    expect(onComplete).toBeCalled();
  });

  it("should delete todo", () => {
    const todo = {
      title: "Test Todo",
      text: "Test Description",
      completed: false,
    };
    const onDelete = jest.fn();

    const element = document.createElement("div");

    ReactDOM.render(<Todo todo={todo} whenDeleted={onDelete} />, element);
    Simulate.click(element.querySelector("button").nextSibling);
    expect(onDelete).toBeCalled();
  });

  /*  it("should add new todo", () => {
    const newTodo = { title: "New Todo", text: "New Text" };
    const postTodo = jest.fn();
    const element = document.createElement("div");
    ReactDOM.render(<AddTodo />, element);
    Simulate.submit(element.querySelector("form"), { newTodo });
    expect(postTodo).toBeCalled();
  }); */
});
