import { FastifyInstance } from 'fastify'

import { listMemories } from '../controllers/memories/list'
import { createMemory } from '../controllers/memories/create'
import { detailsMemory } from '../controllers/memories/details'
import { updateMemory } from '../controllers/memories/update'
import { deleteMemory } from '../controllers/memories/delete'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', listMemories)
  app.get('/memories/:id', detailsMemory)
  app.post('/memories', createMemory)
  app.put('/memories/:id', updateMemory)
  app.delete('/memories/:id', deleteMemory)
}
