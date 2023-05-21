import { Prisma, User } from '@prisma/client'

export type RegisterUserUseCaseRequest = {
  data: Prisma.UserUncheckedCreateInput
}

export type RegisterUserUseCaseResponse = {
  user: User
}
