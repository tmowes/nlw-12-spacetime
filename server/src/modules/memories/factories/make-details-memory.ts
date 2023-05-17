import { PrismaMemoriesRepository } from '../repositories/prisma/prisma-memories'
import { DetailsMemoryUseCase } from '../use-cases/details-memory'

export function makeDetailsMemoryUseCase() {
  const memoriesRepository = new PrismaMemoriesRepository()
  return new DetailsMemoryUseCase(memoriesRepository)
}
