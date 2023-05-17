import { Memory, Prisma } from '@prisma/client'

export type UpdateMemoryUseCaseRequest = {
  id: string
  updatedMemoryData: Prisma.MemoryUncheckedUpdateInput
}

export type UpdateMemoryUseCaseResponse = {
  memory: Memory
}
