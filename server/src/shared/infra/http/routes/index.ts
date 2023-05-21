import { FastifyInstance } from 'fastify'

import { authRoutes } from './auth.routes'
import { memoriesRoutes } from './memories.routes'

export async function appRoutes(app: FastifyInstance) {
  app.register(authRoutes)
  app.register(memoriesRoutes)
}
