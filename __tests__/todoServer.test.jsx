import express from "express";
import { App } from "../server/routes/app.js";
import request from "supertest";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", App);

describe("Todo app server testing", () => {
  it("should return a 200 status code", async () => {
    const response = await request(app).get("/api/getAll");
    expect(response.status).toBe(200);
  });

  it("should list a random todo", async () => {
    const response = await request(app).get("/api/getAll");
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      text: expect.any(String),
      completed: expect.any(Boolean),
    });
  });
});
