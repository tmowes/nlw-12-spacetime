import { MemoriesRepository } from '@modules/memories/repositories/memories.repository'

import { ListMemoriesUseCaseResponse } from './types'

export class ListMemoriesUseCase {
  constructor(private memoriesRepository: MemoriesRepository) {}

  async execute(): Promise<ListMemoriesUseCaseResponse> {
    const memories = await this.memoriesRepository.list()

    const parsedMemoriesExcerpt = memories.map(({ id, coverUrl, content }) => ({
      id,
      coverUrl,
      excerpt: content.length > 115 ? content.substring(0, 115).concat('...') : content,
    }))

    return { memories: parsedMemoriesExcerpt }
  }
}
