import { FastifyReply, FastifyRequest } from 'fastify'
import { makeUpdateMemoryUseCase } from '@modules/memories/factories/make-update-memory'

import { updateMemoryParamsSchema, updateMemoryBodySchema } from './schemas'

export async function updateMemory(request: FastifyRequest, reply: FastifyReply) {
  const { id } = updateMemoryParamsSchema.parse(request.params)

  const { coverUrl, content, isPublic } = updateMemoryBodySchema.parse(request.body)

  const updateMemoryUseCase = makeUpdateMemoryUseCase()

  await updateMemoryUseCase.execute({
    id,
    updatedMemoryData: { coverUrl, content, isPublic, userId: request.user.sub },
  })

  return reply.status(204).send()
}
