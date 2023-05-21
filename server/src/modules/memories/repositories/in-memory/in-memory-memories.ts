import { Memory, Prisma } from '@prisma/client'
import { randomUUID } from 'node:crypto'

import { ResourceNotFoundError } from '@shared/errors/resource-not-found'

import { MemoriesRepository } from '../memories.repository'

export class InMemoryMemoriesRepository implements MemoriesRepository {
  public items: Memory[] = []

  async findById(id: string): Promise<Memory | null> {
    return this.items.find((item) => item.id === id) ?? null
  }

  async list(userId: string): Promise<Memory[]> {
    return this.items.filter((item) => item.userId === userId)
  }

  async create(data: Prisma.MemoryUncheckedCreateInput): Promise<Memory> {
    const memory = {
      id: randomUUID(),
      userId: data.userId,
      content: data.content,
      coverUrl: data.coverUrl,
      isPublic: data.isPublic ?? false,
      createdAt: new Date(),
    }

    this.items.push(memory)

    return memory
  }

  async update(id: string, data: Prisma.MemoryUncheckedUpdateInput): Promise<Memory> {
    const memoryIndex = this.items.findIndex((item) => item.id === id)

    if (memoryIndex < 0) {
      throw new ResourceNotFoundError()
    }

    const updatedMemory = {
      id,
      content: data.content ?? this.items[memoryIndex].content,
      coverUrl: data.coverUrl ?? this.items[memoryIndex].coverUrl,
      isPublic: data.isPublic ?? this.items[memoryIndex].isPublic,
      userId: this.items[memoryIndex].userId,
      createdAt: this.items[memoryIndex].createdAt,
    } as Memory

    this.items[memoryIndex] = updatedMemory

    return updatedMemory
  }

  async delete(id: string): Promise<void> {
    const memoryIndex = this.items.findIndex((item) => item.id === id)

    if (memoryIndex < 0) {
      throw new ResourceNotFoundError()
    }

    this.items.splice(memoryIndex, 1)
  }
}
