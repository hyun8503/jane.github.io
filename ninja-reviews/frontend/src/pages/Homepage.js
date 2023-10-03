import React from "react";
import useFetch from "../hooks/UseFetch";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  console.log(data);
  console.log(data.data);
  const content = data.data;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {content.map((review) => (
        <div key={review.attributes.name} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          <small>coonsole list</small>
          <p>{review.attributes.body}</p>
          <Link to={`/details/${review.attributes.name}`}>read more</Link>
        </div>
      ))}
    </div>
  );
}
