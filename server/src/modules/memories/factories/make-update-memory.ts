import { PrismaMemoriesRepository } from '../repositories/prisma/prisma-memories'
import { UpdateMemoryUseCase } from '../use-cases/update-memory'

export function makeUpdateMemoryUseCase() {
  const memoriesRepository = new PrismaMemoriesRepository()
  return new UpdateMemoryUseCase(memoriesRepository)
}
