import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'
import redis from '../../../../lib/redis'

export async function PATCH(req: NextRequest, { params }) {
  const { id } = params
  const data = await req.json()
  const updatedJoke = await prisma.joke.update({
    where: { id: Number(id) },
    data,
  })
  await redis.del('jokes') // clear cache
  return NextResponse.json(updatedJoke)
}

export async function DELETE(req: NextRequest, { params }) {
  const { id } = params
  await prisma.joke.delete({
    where: { id: Number(id) },
  })
  await redis.del('jokes') // clear cache
  return NextResponse.status(204).end()
}
