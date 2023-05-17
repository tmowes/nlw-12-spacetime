import { User } from '@prisma/client'

import { prisma } from '@shared/libs/prisma'

import { UsersRepository } from '../users.repository'

export class PrismaUsersRepository implements UsersRepository {
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } })
  }

  async list(): Promise<User[]> {
    return prisma.user.findMany() ?? []
  }
}
