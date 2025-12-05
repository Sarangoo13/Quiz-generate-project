import { query } from "@/lib/connetDB";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await prisma.users.findMany();
  return NextResponse.json(res);
};
