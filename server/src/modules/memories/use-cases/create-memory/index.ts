import { MemoriesRepository } from '@modules/memories/repositories/memories.repository'

import { CreateMemoryUseCaseRequest, CreateMemoryUseCaseResponse } from './types'

export class CreateMemoryUseCase {
  constructor(private memoriesRepository: MemoriesRepository) {}

  async execute(request: CreateMemoryUseCaseRequest): Promise<CreateMemoryUseCaseResponse> {
    const { content, coverUrl, isPublic } = request
    const memory = await this.memoriesRepository.create({
      content,
      coverUrl,
      isPublic,
      userId: '1',
    })

    return { memory }
  }
}
