export type ListMemoriesUseCaseRequest = {
  userId: string
}

export type ListMemoriesUseCaseResponse = {
  memories: ListMemoriesDTO[]
}

export type ListMemoriesDTO = {
  id: string
  coverUrl: string
  excerpt: string
}
