import { Memory, Prisma } from '@prisma/client'

export interface MemoriesRepository {
  list(userId: string): Promise<Memory[]>
  findById(id: string): Promise<Memory | null>
  create(data: Prisma.MemoryUncheckedCreateInput): Promise<Memory>
  update(id: string, data: Prisma.MemoryUncheckedUpdateInput): Promise<Memory>
  delete(id: string): Promise<void>
}
