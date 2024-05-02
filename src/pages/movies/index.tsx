import { RouteObject } from "react-router-dom"

const moviesRoute: RouteObject =
{
  children: [
    {
      index: true,
      lazy() {
        return import("./Movies")
      }
    },
    {
      path: ":movieId",
      lazy() {
        return import("./MovieDetail")
      },
      id: "movie",
      children: [
        { path: "cast", lazy: async () => ({ Component: (await import("./Cast")).default }) },
        { path: "reviews", lazy: async () => ({ Component: (await import("./Reviews")).default }) },
      ]
    },
  ]
}
export default moviesRoute

