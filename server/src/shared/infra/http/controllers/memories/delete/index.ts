import { makeDeleteMemoryUseCase } from '@modules/memories/factories/make-delete-memory'
import { FastifyReply, FastifyRequest } from 'fastify'

import { deleteMemoryParamsSchema } from './schemas'

export async function deleteMemory(request: FastifyRequest, reply: FastifyReply) {
  const { id } = deleteMemoryParamsSchema.parse(request.params)

  const deleteMealUseCase = makeDeleteMemoryUseCase()

  await deleteMealUseCase.execute({ id, userId: request.user.sub })

  return reply.status(204).send()
}
