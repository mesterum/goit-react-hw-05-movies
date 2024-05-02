/* eslint-disable react-refresh/only-export-components */

import { Link, LoaderFunction, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { createAPIPath, MovieDetails } from "../../themoviedbAPI";
export const loader: LoaderFunction = async function ({ request, params }) {
  return fetch(createAPIPath(`movie/${params.movieId}`, new URLSearchParams({ append_to_response: "credits,reviews" })), { signal: request.signal })
}
export function Component() {
  const data = useLoaderData() as MovieDetails
  console.log(data);
  const nav = useNavigate()
  return <>
    <button onClick={() => nav(-1)}>Go back</button>
    {/* <h1>MovieDetail</h1> */}
    <div style={{ display: "flex", gap: "1rem" }}>
      <img src={`https://image.tmdb.org/t/p/w342${data.poster_path}`} alt={data.title} />
      <article>
        <h2>{data.title} ({data.release_date.slice(0, 4)})</h2>
        <p>User Score: {Math.round(data.vote_average * 10)} %</p>
        <h3>Overview</h3>
        <p>{data.overview}</p>
        <h3>Genres</h3>
        <p>{data.genres.map(g => g.name).join(", ")}</p>
      </article>
    </div>
    <hr />
    <p>Aditional information</p>
    <ul>
      <li><Link to={`cast`} replace>Cast</Link></li>
      <li><Link to={`reviews`} replace>Reviews</Link></li>
    </ul>
    <hr />
    <Outlet />
  </>
}

Component.displayName = "MovieDetail";
