import axios from 'axios'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeRegisterUserUseCase } from '@modules/users/factories/make-register-user'
import { env } from '@configs/env'

import { githubResponseSchema, registerUserBodySchema } from './schemas'

export async function registerUser(request: FastifyRequest, reply: FastifyReply) {
  const { code } = registerUserBodySchema.parse(request.body)

  const accessTokenResponse = await axios.post('https://github.com/login/oauth/access_token', null, {
    headers: { Accept: 'application/json' },
    params: {
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    },
  })

  const { access_token } = accessTokenResponse.data

  const userResponse = await axios.get('https://api.github.com/user', {
    headers: { Authorization: `Bearer ${access_token}` },
  })

  const userInfo = githubResponseSchema.parse(userResponse.data)

  const registerUserUseCase = makeRegisterUserUseCase()

  const { user } = await registerUserUseCase.execute({
    data: {
      githubId: userInfo.id,
      login: userInfo.login,
      name: userInfo.name,
      avatarUrl: userInfo.avatar_url,
    },
  })

  const token = await reply.jwtSign(
    {
      name: user.name,
      avatarUrl: user.avatarUrl,
    },
    {
      sub: user.id,
      expiresIn: '30d',
    },
  )

  return reply.status(200).send({ token })
}
