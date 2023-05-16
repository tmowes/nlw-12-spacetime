import { User } from '@prisma/client'

import { UsersRepository } from '../users.repository'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findById(id: string): Promise<User | null> {
    return this.items.find((item) => item.id === id) ?? null
  }

  async list(): Promise<User[]> {
    return this.items
  }
}
