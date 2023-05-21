import { z } from 'zod'

export const createMemoryBodySchema = z.object({
  content: z.string(),
  isPublic: z.coerce.boolean().default(false),
})

export const createMemoryFileSchema = z.object({
  fieldname: z.enum(['file']),
  filename: z.string(),
  mimetype: z.string(),
  size: z.number().int().positive(),
})
