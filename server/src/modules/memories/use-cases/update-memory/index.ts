import { MemoriesRepository } from '@modules/memories/repositories/memories.repository'

import { ResourceNotFoundError } from '@shared/errors/resource-not-found'
import { InvalidUserAccessError } from '@shared/errors/invalid-user-access'

import { UpdateMemoryUseCaseRequest, UpdateMemoryUseCaseResponse } from './types'

export class UpdateMemoryUseCase {
  constructor(private memoriesRepository: MemoriesRepository) {}

  async execute(request: UpdateMemoryUseCaseRequest): Promise<UpdateMemoryUseCaseResponse> {
    const { id, updatedMemoryData } = request
    const { userId } = updatedMemoryData

    const memory = await this.memoriesRepository.findById(id)

    if (!memory) {
      throw new ResourceNotFoundError()
    }

    if (memory.userId !== userId) {
      throw new InvalidUserAccessError()
    }

    const updatedMemory = await this.memoriesRepository.update(id, updatedMemoryData)

    return { memory: updatedMemory }
  }
}
