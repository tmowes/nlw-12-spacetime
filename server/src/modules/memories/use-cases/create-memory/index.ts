import { MemoriesRepository } from '@modules/memories/repositories/memories.repository'

import { CreateMemoryUseCaseRequest, CreateMemoryUseCaseResponse } from './types'

export class CreateMemoryUseCase {
  constructor(private memoriesRepository: MemoriesRepository) {}

  async execute(request: CreateMemoryUseCaseRequest): Promise<CreateMemoryUseCaseResponse> {
    const { content, coverUrl, isPublic } = request
    await this.memoriesRepository.create({
      content,
      coverUrl,
      isPublic,
      userId: '1',
    })
  }
}
