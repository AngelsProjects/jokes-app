import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../../lib/prisma'

export async function GET(req: NextRequest, { params }) {
  const { number } = params
  const jokes = await prisma.joke.findMany({
    take: Number(number),
    orderBy: {
      createdAt: 'desc',
    },
  })
  return NextResponse.json(jokes)
}
