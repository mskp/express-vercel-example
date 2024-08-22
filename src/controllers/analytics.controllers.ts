import type { Request, Response } from "express";

export function GET(req: Request, res: Response) {
  res.json({ message: "GET /analytics" });
}

export function POST(req: Request, res: Response) {
  res.json({ message: "POST /analytics" });
}
