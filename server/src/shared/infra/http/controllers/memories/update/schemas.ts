import { z } from 'zod'

export const updateMemoryBodySchema = z.object({
  content: z.string().optional(),
  coverUrl: z.string().optional(),
  isPublic: z.coerce.boolean().optional(),
})

export const updateMemoryParamsSchema = z.object({ id: z.string() })
