import Fastify from "fastify"
import cors from "@fastify/cors"
import { movieRoutes } from "./routes/movieRoutes"

async function bootstrap() {
  const app = Fastify()

  await app.register(cors, {
    origin: "*",
  })

  app.register(movieRoutes)

  await app.listen({ port: 3000 })

  console.log("Server running on http://localhost:3000")
}

bootstrap()
