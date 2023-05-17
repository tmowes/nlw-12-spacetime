import { PrismaUsersRepository } from '../repositories/prisma/prisma-users'
import { ListUsersUseCase } from '../use-cases/list-users'

export function makeListUsersUseCase() {
  const usersRepository = new PrismaUsersRepository()
  return new ListUsersUseCase(usersRepository)
}
