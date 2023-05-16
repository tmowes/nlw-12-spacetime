import { FastifyInstance } from 'fastify'

import { listUsers } from '../controllers/users/list-users'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/users', listUsers)
}
