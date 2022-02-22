import React from "react";
import ReactDOM from "react-dom";
import pretty from "pretty";
import { MemoryRouter } from "react-router-dom";
import { Frontpage } from "../pages/frontpage";

describe("Client tests", () => {
  it("should display page ", () => {
    const element = document.createElement("div");
    ReactDOM.render(<Frontpage />, element);
    expect(element).toMatchSnapshot();
  });
});
