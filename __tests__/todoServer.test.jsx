import express from "express";
import { App } from "../server/routes/app.js";
import request from "supertest";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/getAll", App);

describe("Todo app server testing", () => {
  it("should return a 200 status code and message"),
    async () => {
      const response = await request(app().get("/api/getAll"));
      expect(response.status).toBe(200);
    };
});
