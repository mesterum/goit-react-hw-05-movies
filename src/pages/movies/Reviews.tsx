import { useRouteLoaderData } from "react-router-dom";
import { MovieDetails } from "../../themoviedbAPI";

export default function Reviews() {
  const { reviews } = useRouteLoaderData("movie") as MovieDetails
  if (!reviews.total_results) return <div>We don't have any reviews for this movie. </div>
  return <ul>
    {reviews.results.map((review) => (
      <li key={review.id}>
        <h3>Author: {review.author}</h3>
        <p>{review.content}</p>
      </li>
    ))}
  </ul>
}
