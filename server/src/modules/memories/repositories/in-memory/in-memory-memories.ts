import { Memory } from '@prisma/client'

import { MemoriesRepository } from '../memories.repository'

export class InMemoryMemoriesRepository implements MemoriesRepository {
  public items: Memory[] = []

  async findById(id: string): Promise<Memory | null> {
    return this.items.find((item) => item.id === id) ?? null
  }

  async list(): Promise<Memory[]> {
    return this.items
  }
}
