import { FastifyInstance } from 'fastify'

import { usersRoutes } from './users.routes'
import { memoriesRoutes } from './memories.routes'

export async function appRoutes(app: FastifyInstance) {
  app.register(usersRoutes)
  app.register(memoriesRoutes)
}
