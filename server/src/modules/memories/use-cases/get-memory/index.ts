import { MemoriesRepository } from '@modules/memories/repositories/memories.repository'

import { ListMemoriesUseCaseRequest, ListMemoriesUseCaseResponse } from './types'

export class ListMemoriesUseCase {
  constructor(private memoriesRepository: MemoriesRepository) {}

  async execute(request: ListMemoriesUseCaseRequest): Promise<ListMemoriesUseCaseResponse> {
    const memories = await this.memoriesRepository.list()
    return { memories }
  }
}
