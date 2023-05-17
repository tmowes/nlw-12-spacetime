import { PrismaMemoriesRepository } from '../repositories/prisma/prisma-memories'
import { ListMemoriesUseCase } from '../use-cases/list-memories'

export function makeListMemoriesUseCase() {
  const memoriesRepository = new PrismaMemoriesRepository()
  return new ListMemoriesUseCase(memoriesRepository)
}
