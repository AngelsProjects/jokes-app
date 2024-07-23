import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req: NextRequest, { params }) {
  const { number } = params
  const count = await prisma.joke.count()
  const randomJokes = await prisma.$queryRaw`
    SELECT * FROM "Joke"
    ORDER BY RANDOM()
    LIMIT ${Number(number)}
  `
  return NextResponse.json(randomJokes)
}
