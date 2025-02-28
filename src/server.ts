import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from './env'
import { accessInviteLinkRoute } from './routes/access-invite-link-route'
import { getRankingRoute } from './routes/get-ranking-route'
import { getSubscriberRankingPositionRoute } from './routes/get-subscriber--ranking-position-route'
import { getSubscriberInviteClicksRoute } from './routes/get-subscriber-invite-clicks-route'
import { getSubscriberInviteCountRoute } from './routes/get-subscriber-invites-count-route'
import { subscribeToEventRoute } from './routes/subscribe-to-event-route'
import { sendMessageRoute } from './routes/send-message-route'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
app.register(fastifyCors)
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'NLW',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})
app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)
app.register(getRankingRoute)
app.register(getSubscriberInviteCountRoute)
app.register(getSubscriberInviteClicksRoute)
app.register(getSubscriberRankingPositionRoute)
app.register(sendMessageRoute)

app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server running')
})
