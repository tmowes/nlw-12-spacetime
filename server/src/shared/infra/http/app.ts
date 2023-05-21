import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import fastifyStatic from '@fastify/static'
import { ZodError } from 'zod'
import { env } from '@configs/env'
import { staticConfig } from '@configs/static'
import { authJwt } from '@configs/auth'
import { corsConfig } from '@configs/cors'
import { contentParser } from '@configs/upload'

import { appRoutes } from './routes'

export const app = fastify()

app.register(cors, corsConfig)

app.register(jwt, authJwt)

app.register(contentParser)

app.register(appRoutes)

app.register(fastifyStatic, staticConfig)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
