import { makeListUsersUseCase } from '@modules/users/factories/make-list-users'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listUsers(request: FastifyRequest, reply: FastifyReply) {
  const listUsersUseCase = makeListUsersUseCase()

  const { users } = await listUsersUseCase.execute({})

  return reply.status(200).send({ users })
}
