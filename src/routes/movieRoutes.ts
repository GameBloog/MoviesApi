import { FastifyInstance } from "fastify"
import { ListMoviesController } from "src/controllers/listMoviesController"
import { GetMovieByIdController } from "src/controllers/getMovieByIdController"

export async function movieRoutes(app: FastifyInstance) {
  const listMoviesController = new ListMoviesController()
  const getMovieByIdController = new GetMovieByIdController()

  app.get("/movies", listMoviesController.listMovies.bind(listMoviesController))
  app.get(
    "/movies/:id",
    getMovieByIdController.getMovieById.bind(getMovieByIdController)
  )
}
