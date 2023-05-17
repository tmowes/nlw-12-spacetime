import { MemoriesRepository } from '@modules/memories/repositories/memories.repository'

import { ResourceNotFoundError } from '@shared/errors/resource-not-found'

import { DetailsMemoryUseCaseRequest, DetailsMemoryUseCaseResponse } from './types'

export class DetailsMemoryUseCase {
  constructor(private memoriesRepository: MemoriesRepository) {}

  async execute({ id }: DetailsMemoryUseCaseRequest): Promise<DetailsMemoryUseCaseResponse> {
    const memory = await this.memoriesRepository.findById(id)

    if (!memory) {
      throw new ResourceNotFoundError()
    }

    return { memory }
  }
}
