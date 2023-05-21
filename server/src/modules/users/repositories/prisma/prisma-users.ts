import { Prisma, User } from '@prisma/client'

import { prisma } from '@shared/libs/prisma'

import { UsersRepository } from '../users.repository'

export class PrismaUsersRepository implements UsersRepository {
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } })
  }

  async findByGithubId(githubId: number): Promise<User | null> {
    return prisma.user.findUnique({ where: { githubId } })
  }

  async register(data: Prisma.UserUncheckedCreateInput): Promise<User> {
    const { githubId, login, name, avatarUrl } = data

    let user = await this.findByGithubId(githubId)

    if (!user) {
      user = await prisma.user.create({ data: { githubId, login, name, avatarUrl } })
    }

    return user
  }
}
