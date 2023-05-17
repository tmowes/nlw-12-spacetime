export type ListMemoriesUseCaseResponse = {
  memories: ListMemoriesDTO[]
}

export type ListMemoriesDTO = {
  id: string
  coverUrl: string
  excerpt: string
}
