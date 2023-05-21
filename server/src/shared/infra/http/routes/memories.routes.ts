import { FastifyInstance } from 'fastify'
import { upload } from '@configs/upload'
import multer from 'fastify-multer'

import { listMemories } from '../controllers/memories/list'
import { createMemory } from '../controllers/memories/create'
import { detailsMemory } from '../controllers/memories/details'
import { updateMemory } from '../controllers/memories/update'
import { deleteMemory } from '../controllers/memories/delete'

const file = multer(upload)

export async function memoriesRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify()
  })

  app.post('/memories', { preHandler: file.single('file') }, createMemory)
  app.get('/memories', listMemories)
  app.get('/memories/:id', detailsMemory)
  app.put('/memories/:id', updateMemory)
  app.delete('/memories/:id', deleteMemory)
}
