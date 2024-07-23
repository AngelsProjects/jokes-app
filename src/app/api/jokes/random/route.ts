import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const count = await prisma.joke.count()
  const randomIndex = Math.floor(Math.random() * count)
  const randomJoke = await prisma.joke.findMany({
    skip: randomIndex,
    take: 1,
  })
  return NextResponse.json(randomJoke[0])
}
