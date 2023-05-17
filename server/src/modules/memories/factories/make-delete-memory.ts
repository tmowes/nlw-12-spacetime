import { PrismaMemoriesRepository } from '../repositories/prisma/prisma-memories'
import { DeleteMemoryUseCase } from '../use-cases/delete-memory'

export function makeDeleteMemoryUseCase() {
  const memoriesRepository = new PrismaMemoriesRepository()
  return new DeleteMemoryUseCase(memoriesRepository)
}
