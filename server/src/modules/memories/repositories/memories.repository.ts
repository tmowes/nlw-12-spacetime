import { Memory, Prisma } from '@prisma/client'

export interface MemoriesRepository {
  findById(id: string): Promise<Memory | null>
  list(): Promise<Memory[]>
  create(data: Prisma.MemoryUncheckedCreateInput): Promise<void>
}
