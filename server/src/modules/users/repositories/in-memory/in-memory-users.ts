import { Prisma, User } from '@prisma/client'
import { randomUUID } from 'node:crypto'

import { UsersRepository } from '../users.repository'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findById(id: string): Promise<User | null> {
    return this.items.find((item) => item.id === id) ?? null
  }

  async findByGithubId(githubId: number): Promise<User | null> {
    return this.items.find((item) => item.githubId === githubId) ?? null
  }

  async register(data: Prisma.UserUncheckedCreateInput): Promise<User> {
    const { githubId, avatarUrl, login, name } = data
    const user = {
      id: randomUUID(),
      githubId,
      name,
      login,
      avatarUrl,
      createdAt: new Date(),
    }

    this.items.push(user)

    return user
  }
}
