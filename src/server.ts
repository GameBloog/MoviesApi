import Fastify from "fastify"
import cors from "@fastify/cors"
import { movieRoutes } from "./routes/movieRoutes"

const PORT = 3000

async function bootstrap() {
  const app = Fastify()

  await app.register(cors, {
    origin: "*",
  })

  app.register(movieRoutes)

  await app.listen({ port: PORT })

  console.log(`Server running on http://localhost:${PORT}`)
}

bootstrap()
