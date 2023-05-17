import { Memory } from '@prisma/client'

export type ListMemoriesUseCaseRequest = {}

export type ListMemoriesUseCaseResponse = {
  memories: Memory[]
}
