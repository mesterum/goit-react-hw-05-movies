// import PropTypes from "prop-types";

import { Link, useLoaderData } from "react-router-dom";
import { SearchResult } from "../themoviedbAPI";

export default function Home() {
  const data = useLoaderData() as SearchResult
  console.log(data);
  return <>
    <h1>Home</h1>
    <ul>
      {data.results.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  </>

}

Home.propTypes = {
  // visible: PropTypes.bool.isRequired,
};