import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

export async function GET() {
  const joke = await prisma.joke.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return NextResponse.json(joke)
}
