import { PrismaPetsRepository } from '../repositories/prisma/prisma-users'
import { ListUsersUseCase } from '../use-cases/list-users'

export function makeListUsersUseCase() {
  const usersRepository = new PrismaPetsRepository()
  return new ListUsersUseCase(usersRepository)
}
