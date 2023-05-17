export type ListMemoriesUseCaseRequest = {}

export type ListMemoriesUseCaseResponse = {
  memories: {
    id: string
    coverUrl: string
    excerpt: string
  }[]
}
