import { PrismaMemoriesRepository } from '../repositories/prisma/prisma-memories'
import { CreateMemoryUseCase } from '../use-cases/create-memory'

export function makeCreateMemoryUseCase() {
  const memoriesRepository = new PrismaMemoriesRepository()
  return new CreateMemoryUseCase(memoriesRepository)
}
