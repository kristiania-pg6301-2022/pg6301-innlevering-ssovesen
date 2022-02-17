import express from "express";
import { App } from "../server/routes/app.js";
import request from "supertest";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", App);

describe("Todo app server testing", () => {
  it("should return a 200 status code and message", async () => {
    const response = await request(app).get("/api/getAll");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ message: "This is all" });
  });

  it("should list all todos", async () => {
    const response = await request(app).get("/api/getAll");
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      text: expect.any(String),
      finished: expect.any(Boolean),
    });
  });
});
