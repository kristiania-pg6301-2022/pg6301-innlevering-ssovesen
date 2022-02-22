import express from "express";
import { TodoApp } from "../server/routes/TodoApp.js";
import request from "supertest";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", TodoApp);

describe("Todos app server testing", () => {
  it("should return a 200 status code", async () => {
    const response = await request(app).get("/api/getAll");
    expect(response.status).toBe(200);
  });

  // should test to get all todos
  it("should get all todos", async () => {
    const response = await request(app).get("/api/getAll");
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          text: expect.any(String),
          completed: expect.any(Boolean),
        }),
      ])
    );
  });

  it("should fail to add a todo", async () => {
    const response = await request(app).post("/api/addTodo").send({
      title: "test",
      text: "test",
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Please provide all the required fields",
      })
    );
  });

  it("should add a todo", async () => {
    const response = await request(app).post("/api/addTodo").send({
      id: 1,
      title: "test",
      text: "test",
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Todos added successfully",
      })
    );
  });

  it("should get todo by id", async () => {
    const response = await request(app).get("/api/getTodo/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
        title: "Vaske gulvet",
        text: "Sigurd må vaske gulvet i dag",
        completed: false,
      })
    );
  });

  it("should return 404 if todo does not exis", async () => {
    const response = await request(app).get("/api/getTodo/-1");
    expect(response.status).toBe(404);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Todo not found",
      })
    );
  });
});
