import { RouteObject } from "react-router-dom"
import NavBar from "../components/NavBar"
import { createAPIPath } from "../themoviedbAPI"
import Home from "./Home"
import moviesRoute from "./movies"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Home />,
        loader({ request }) {
          return fetch(createAPIPath("trending/movie/week"), { signal: request.signal })
        }
      },
      {
        path: "movies",
        ...moviesRoute
      },
    ]
  },
]
export default routes