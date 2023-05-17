import { makeDetailsMemoryUseCase } from '@modules/memories/factories/make-details-memory'
import { FastifyReply, FastifyRequest } from 'fastify'

import { detailsMemoryParamsSchema } from './schemas'

export async function detailsMemory(request: FastifyRequest, reply: FastifyReply) {
  const { id } = detailsMemoryParamsSchema.parse(request.params)

  const detailsMemoryUseCase = makeDetailsMemoryUseCase()

  const { memory } = await detailsMemoryUseCase.execute({ id })

  return reply.status(200).send({ memory })
}
