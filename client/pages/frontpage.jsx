import React from "react";
import { Link } from "react-router-dom";

export function Frontpage() {
  return (
    <>
      <h1>FrontPage</h1>
      <Link to={"/todos"}>Todo</Link>
    </>
  );
}
