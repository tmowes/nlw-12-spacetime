import { z } from 'zod'

export const deleteMemoryParamsSchema = z.object({ id: z.string() })
