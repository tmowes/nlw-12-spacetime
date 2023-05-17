import { MemoriesRepository } from '@modules/memories/repositories/memories.repository'

import { ListMemoriesUseCaseRequest, ListMemoriesUseCaseResponse } from './types'

export class ListMemoriesUseCase {
  constructor(private memoriesRepository: MemoriesRepository) {}

  async execute(request: ListMemoriesUseCaseRequest): Promise<ListMemoriesUseCaseResponse> {
    const memories = await this.memoriesRepository.list()

    const parsedMemoriesExcerpt = memories.map(({ id, coverUrl, content }) => ({
      excerpt: content.length > 115 ? content.substring(0, 115).concat('...') : content,
      id,
      coverUrl,
    }))

    return { memories: parsedMemoriesExcerpt }
  }
}
