import { User } from '@prisma/client'
import { prisma } from '@shared/libs/prisma'

import { UsersRepository } from '../users.repository'

export class PrismaPetsRepository implements UsersRepository {
  async findById(id: string): Promise<User | null> {
    return prisma.pet.findUnique({ where: { id } })
  }

  async list(): Promise<User[]> {
    return prisma.user.findMany() ?? []
  }


}
