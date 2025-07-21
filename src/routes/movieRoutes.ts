import { FastifyInstance } from 'fastify'
import { MovieController } from 'src/controllers/movieController'

export async function movieRoutes(app: FastifyInstance) {
  const controller = new MovieController()

  app.get('/movies', controller.listMovies.bind(controller))
  app.get('/movies/:id', controller.getMovieById.bind(controller))
}
