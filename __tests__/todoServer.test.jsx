import express from "express";
import { TodoApp } from "../server/routes/TodoApp.js";
import { Todos } from "../server/todos";
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
    const response = await request(app).post("/api/addTodo/").send({
      title: "test",
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Please provide all required fields",
      })
    );
  });

  it("should add a todo", async () => {
    const response = await request(app).post("/api/addTodo").send({
      id: 8,
      title: "test",
      text: "test",
      completed: false,
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Todo added successfully",
      })
    );
  });

  it("should not add a todo if it exists", async () => {
    const response = await request(app).post("/api/addTodo").send({
      id: 2,
      title: "test",
      text: "test",
      completed: false,
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Todo already exists",
      })
    );
  });

  it("should get todo by id", async () => {
    const response = await request(app).get("/api/todo/1");
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
    const response = await request(app).get("/api/todo/-1");
    expect(response.status).toBe(404);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Todo not found",
      })
    );
  });

  it("should delete todo and check that it is deleted", async () => {
    const response = await request(app).delete("/api/todo/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Todo deleted successfully",
      })
    );
    const response2 = await request(app).get("/api/todo/1");
    expect(response2.status).toBe(404);
    expect(response2.body).toEqual(
      expect.objectContaining({
        message: "Todo not found",
      })
    );
  });

  it("should update task when completed", async () => {
    const response = await request(app).put("/api/todo/1").send({
      completed: true,
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Todo updated successfully",
      })
    );
    const response2 = await request(app).get("/api/todo/1");
    expect(response2.status).toBe(200);
    expect(response2.body).toEqual(
      expect.objectContaining({
        id: 1,
        title: "Vaske gulvet",
        text: "Sigurd må vaske gulvet i dag",
        completed: true,
      })
    );
  });
});
