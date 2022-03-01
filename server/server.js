import express from "express";
import { TodoApp } from "./routes/TodoApp.js";
import path from "path";
import { pathResolve } from "./middleware/pathResolve.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", TodoApp);

app.use(express.static(path.resolve("../client/dist")));
app.use(pathResolve);

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(`Server started at http://localhost:${server.address().port}`);
});
