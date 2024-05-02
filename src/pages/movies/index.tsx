import { RouteObject } from "react-router-dom"
import { createAPIPath } from "../../themoviedbAPI"
import Movies from "./Movies";
import MovieDetail from "./MovieDetail"
import Reviews from "./Reviews";
import Cast from "./Cast";

const moviesRoute: RouteObject =
{
  children: [
    {
      index: true,
      element: <Movies />,
      loader({ request }) {
        const url = new URL(request.url);
        const query = url.searchParams.get("query");
        if (!query) return { page: 1, results: [], total_pages: 0, total_results: 0 };
        return fetch(createAPIPath("search/movie", url.searchParams), { signal: request.signal })
      }
    },
    {
      path: ":movieId",
      element: <MovieDetail />,
      loader({ request, params }) {
        return fetch(createAPIPath(`movie/${params.movieId}`, new URLSearchParams({ append_to_response: "credits,reviews" })), { signal: request.signal })
      },
      id: "movie",
      children: [
        { path: "cast", element: <Cast /> },
        { path: "reviews", element: <Reviews /> }
      ]
    },
  ]
}
export default moviesRoute

