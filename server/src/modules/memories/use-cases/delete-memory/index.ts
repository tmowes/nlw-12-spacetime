import { MemoriesRepository } from '@modules/memories/repositories/memories.repository'

import { InvalidUserAccessError } from '@shared/errors/invalid-user-access'
import { ResourceNotFoundError } from '@shared/errors/resource-not-found'

import { DeleteMemoryUseCaseRequest } from './types'

export class DeleteMemoryUseCase {
  constructor(private memoriesRepository: MemoriesRepository) {}

  async execute(request: DeleteMemoryUseCaseRequest): Promise<void> {
    const { id, userId } = request
    const memory = await this.memoriesRepository.findById(id)

    if (!memory) {
      throw new ResourceNotFoundError()
    }

    if (memory.userId !== userId) {
      throw new InvalidUserAccessError()
    }

    await this.memoriesRepository.delete(id)
  }
}
