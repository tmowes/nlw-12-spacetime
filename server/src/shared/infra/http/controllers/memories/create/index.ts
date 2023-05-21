import { makeCreateMemoryUseCase } from '@modules/memories/factories/make-create-memory'
import { FastifyReply, FastifyRequest } from 'fastify'

import { createMemoryBodySchema, createMemoryFileSchema } from './schemas'

export async function createMemory(request: FastifyRequest, reply: FastifyReply) {
  console.log(request)

  const { content, isPublic } = createMemoryBodySchema.parse(request.body)

  const cover = createMemoryFileSchema.parse(request.file)

  if (!cover) {
    return reply.status(400).send()
  }

  console.log(cover)

  const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/
  const isValidFileFormat = mimeTypeRegex.test(cover.mimetype)

  if (!isValidFileFormat) {
    return reply.status(400).send()
  }

  const createMemoryUseCase = makeCreateMemoryUseCase()

  await createMemoryUseCase.execute({
    content,
    coverUrl: cover.filename,
    isPublic,
    userId: request.user.sub,
  })

  return reply.status(201).send()
}
