import { makeCreateMemoryUseCase } from '@modules/memories/factories/make-create-memory'
import { FastifyReply, FastifyRequest } from 'fastify'

import { createMemoryBodySchema } from './schemas'

export async function createMemory(request: FastifyRequest, reply: FastifyReply) {
  const { content, coverUrl, isPublic } = createMemoryBodySchema.parse(request.body)

  const createMemoryUseCase = makeCreateMemoryUseCase()

  await createMemoryUseCase.execute({
    content,
    coverUrl,
    isPublic,
  })

  return reply.status(201).send()
}
