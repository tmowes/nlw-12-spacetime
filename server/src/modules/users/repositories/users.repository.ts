import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  findById(id: string): Promise<User | null>
  findByGithubId(githubId: number): Promise<User | null>
  register(data: Prisma.UserUncheckedCreateInput): Promise<User>
}
