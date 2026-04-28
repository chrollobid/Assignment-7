import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

const filePath = join(process.cwd(), "public", "data.json");

export async function GET() {
  const data = JSON.parse(readFileSync(filePath, "utf-8"));
  return NextResponse.json(data.timeline || []);
}

export async function POST(req) {
  const body = await req.json();
  const data = JSON.parse(readFileSync(filePath, "utf-8"));

  const newEntry = {
    id: Date.now(),
    type: body.type,
    friendName: body.friendName,
    friendId: body.friendId,
    date: new Date().toISOString(),
  };

  data.timeline = [newEntry, ...(data.timeline || [])];
  writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json({ success: true, entry: newEntry });
}