import { FastifyInstance } from 'fastify'

import { registerUser } from '../controllers/auth/register-user'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', registerUser)
}
