/* eslint-disable sonarjs/no-duplicate-string */
import { FastifyInstance } from 'fastify'

import { listMemories } from '../controllers/memories/list'
import { createMemory } from '../controllers/memories/create'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', listMemories)
  app.get('/memories/:id', getMemory)
  app.post('/memories', createMemory)
  app.put('/memories/:id', updateMemory)
  app.delete('/memories/:id', deleteMemory)
}
