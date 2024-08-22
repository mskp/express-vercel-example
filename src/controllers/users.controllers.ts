import type { Request, Response } from "express";

export function PUT(req: Request, res: Response) {
  res.json({ message: "PUT /users" });
}

export function DELETE(req: Request, res: Response) {
  res.json({ message: "DELETE /users" });
}
