import { makeListMemoriesUseCase } from '@modules/memories/factories/make-list-memories'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listMemories(request: FastifyRequest, reply: FastifyReply) {
  const listMemoriesUseCase = makeListMemoriesUseCase()

  const { memories } = await listMemoriesUseCase.execute({})

  return reply.status(200).send({ memories })
}
