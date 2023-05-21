import { env } from './env'

export const authJwt = { secret: env.JWT_SECRET }
