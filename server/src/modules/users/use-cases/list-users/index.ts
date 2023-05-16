import { UsersRepository } from '@modules/users/repositories/users.repository'

import { ListUsersUseCaseRequest, ListUsersUseCaseResponse } from './types'

export class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: ListUsersUseCaseRequest): Promise<ListUsersUseCaseResponse> {
    const users = await this.usersRepository.list()
    return { users }
  }
}
