import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/lib/prisma'
import redis from '@/lib/redis'

export async function GET() {
  const cachedJokes = await redis.get('jokes')

  if (cachedJokes) {
    return NextResponse.json(JSON.parse(cachedJokes))
  }

  const jokes = await prisma.joke.findMany()

  await redis.set('jokes', JSON.stringify(jokes), 'EX', 3600) // cache for 1 hour

  return NextResponse.json(jokes)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const newJoke = await prisma.joke.create({ data })

  await redis.del('jokes') // clear cache

  return NextResponse.json(newJoke)
}
