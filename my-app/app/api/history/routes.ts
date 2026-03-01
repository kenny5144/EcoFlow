import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()


export async function GET() {
  try {
    const uploads = await prisma.analysis.findMany({ orderBy: { createdAt: "desc" } });
    return new Response(JSON.stringify(uploads), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}