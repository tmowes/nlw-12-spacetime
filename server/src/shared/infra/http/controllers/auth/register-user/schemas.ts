import { z } from 'zod'

export const registerUserBodySchema = z.object({ code: z.string() })

export const githubResponseSchema = z.object({
  id: z.number(),
  login: z.string(),
  name: z.string(),
  avatar_url: z.string().url(),
})
