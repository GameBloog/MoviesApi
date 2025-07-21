// src/server.ts
import Fastify from 'fastify'
import { movieRoutes } from './routes/movieRoutes'

const app = Fastify()

app.register(movieRoutes)

app.listen({ port: 3000 }).then(() => {
  console.log('Server running on http://localhost:3000')
})
