import { PrismaUsersRepository } from '../repositories/prisma/prisma-users'
import { RegisterUserUseCase } from '../use-cases/register-user'

export function makeRegisterUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  return new RegisterUserUseCase(usersRepository)
}
