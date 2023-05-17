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

  async create(data: Prisma.MemoryUncheckedCreateInput): Promise<Memory> {
    return prisma.memory.create({ data })
  }

  async update(id: string, data: Prisma.MemoryUncheckedUpdateInput): Promise<Memory> {
    return prisma.memory.update({
      where: { id },
      data: {
        content: data.content,
        coverUrl: data.coverUrl,
        isPublic: data.isPublic,
      },
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.memory.delete({ where: { id } })
  }
}
