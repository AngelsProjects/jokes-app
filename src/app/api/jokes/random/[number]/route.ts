import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/lib/prisma'
import { RandomParamsProps } from '@/types/api'

export async function GET(req: NextRequest, { params }: RandomParamsProps) {
  const { number } = params
  const count = await prisma.joke.count()

  const randomJokes = await prisma.$queryRaw`
    SELECT * FROM "Joke"
    ORDER BY RANDOM()
    LIMIT ${Number(number)}
  `

  return NextResponse.json(randomJokes)
}
