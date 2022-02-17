import express from "express";
import { App } from "./routes/app";

const app = express();

app.use("/api", App);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at http://localhost:${server.address().port}`);
});
