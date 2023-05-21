import { UsersRepository } from '@modules/users/repositories/users.repository'

import { RegisterUserUseCaseRequest, RegisterUserUseCaseResponse } from './types'

export class RegisterUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: RegisterUserUseCaseRequest): Promise<RegisterUserUseCaseResponse> {
    const { data } = request
    const user = await this.usersRepository.register(data)
    return { user }
  }
}
