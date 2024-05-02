import { Form, useSearchParams } from "react-router-dom";
import { Link, useLoaderData } from "react-router-dom";
import { SearchResult } from "../../themoviedbAPI";
import { useRef } from "react";

export default function Movies() {
  const data = useLoaderData() as SearchResult;
  // console.log(data);
  const [searchParams] = useSearchParams();
  const form = useRef<HTMLFormElement>(null);
  form.current?.reset();
  return <>
    <Form ref={form}>
      <input name="query" defaultValue={searchParams.get("query") ?? ""} />
      <button>Search</button>
    </Form>
    <ul>
      {data.results.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  </>;
}
