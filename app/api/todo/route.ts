// Buffer Line
import { NextRequest as Request, NextResponse as Response } from "next/server";
import TodoRepository from "./TodoRepository";

export const todoRepo = new TodoRepository();

export async function GET(_request: Request) {
  await new Promise((r) => setTimeout(r, 2000));
  return Response.json({ data: todoRepo.getTodo() });
}

export async function POST(request: Request) {
  const newTodo = await request.json();
  return Response.json(todoRepo.postTodo(newTodo.todoName || ""));
}

export async function PUT(request: Request) {
  const newTodo = await request.json();
  return Response.json(
    todoRepo.updateTodo(newTodo || { id: -1, todoName: "" })
  );
}
