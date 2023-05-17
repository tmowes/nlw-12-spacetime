import { Memory, Prisma } from '@prisma/client'

import { prisma } from '@shared/libs/prisma'

import { MemoriesRepository } from '../memories.repository'

export class PrismaMemoriesRepository implements MemoriesRepository {
  async findById(id: string): Promise<Memory | null> {
    return prisma.memory.findUnique({ where: { id } })
  }

  async list(): Promise<Memory[]> {
    return prisma.memory.findMany({ orderBy: { createdAt: 'asc' } })
  }

  async create(data: Prisma.MemoryUncheckedCreateInput): Promise<void> {
    await prisma.memory.create({ data })
  }
}
