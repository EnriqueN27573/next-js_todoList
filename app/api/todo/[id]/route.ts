// Buffer Line
import { NextRequest as Request, NextResponse as Response } from "next/server";
import { todoRepo } from "../route";

export async function DELETE(request: Request) {
  const id = request.url.split("/").pop();
  return Response.json(todoRepo.deleteTodo(parseInt(id || "")));
}
