import { useRouteLoaderData } from "react-router-dom";
import { MovieDetails } from "../../themoviedbAPI";

export default function Cast() {
  const { cast } = (useRouteLoaderData("movie") as MovieDetails).credits
  return <ul>
    {cast.map((c) => (
      <li key={c.order}>
        {c.profile_path && <img src={`https://image.tmdb.org/t/p/w185${c.profile_path}`} alt={c.name} />}
        <p>{c.name}</p>
        <p>Character: {c.character}</p>
      </li>
    ))}
  </ul>
}
