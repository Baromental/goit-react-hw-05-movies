import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { useAsync } from 'Hooks/useAsync';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews] = useAsync(fetchMovieReviews, movieId);

  if (!reviews) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
