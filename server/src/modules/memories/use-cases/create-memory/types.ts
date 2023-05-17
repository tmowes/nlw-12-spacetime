import { Memory } from '@prisma/client'

export type CreateMemoryUseCaseRequest = {
  content: string
  coverUrl: string
  isPublic: boolean
}

export type CreateMemoryUseCaseResponse = {
  memory: Memory
}
