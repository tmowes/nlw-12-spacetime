import { User } from '@prisma/client'

export type ListUsersUseCaseRequest = {}

export type ListUsersUseCaseResponse = {
  users: User[]
}
