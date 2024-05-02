/* eslint-disable react-refresh/only-export-components */
import { Form, LoaderFunction, useSearchParams } from "react-router-dom";
import { Link, useLoaderData } from "react-router-dom";
import { createAPIPath, SearchResult } from "../../themoviedbAPI";
import { useRef } from "react";

export const loader: LoaderFunction = async function ({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  if (!query) return { page: 1, results: [], total_pages: 0, total_results: 0 };
  return fetch(createAPIPath("search/movie", url.searchParams), { signal: request.signal })
}

export function Component() {
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
Component.displayName = "Movies";
