import { MemoriesRepository } from '@modules/memories/repositories/memories.repository'

import { ResourceNotFoundError } from '@shared/errors/resource-not-found'

import { UpdateMemoryUseCaseRequest, UpdateMemoryUseCaseResponse } from './types'

export class UpdateMemoryUseCase {
  constructor(private memoriesRepository: MemoriesRepository) {}

  async execute(request: UpdateMemoryUseCaseRequest): Promise<UpdateMemoryUseCaseResponse> {
    const { id, updatedMemoryData } = request

    const memory = await this.memoriesRepository.findById(id)

    if (!memory) {
      throw new ResourceNotFoundError()
    }

    const updatedMemory = await this.memoriesRepository.update(id, updatedMemoryData)

    return { memory: updatedMemory }
  }
}
