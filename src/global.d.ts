import { PrismaClient } from '@prisma/client'

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient
    }
  }

  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}

export {}
