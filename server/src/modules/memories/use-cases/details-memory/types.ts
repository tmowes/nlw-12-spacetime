import { Memory } from '@prisma/client'

export type DetailsMemoryUseCaseRequest = {
  id: string
}

export type DetailsMemoryUseCaseResponse = {
  memory: Memory
}
