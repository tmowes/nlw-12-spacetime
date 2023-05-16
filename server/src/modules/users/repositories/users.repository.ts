import { User } from '@prisma/client'

export interface UsersRepository {
  findById(id: string): Promise<User | null>
  list(): Promise<User[]>
}
