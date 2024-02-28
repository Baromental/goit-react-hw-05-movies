import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import { useAsync } from 'Hooks/useAsync';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movie] = useAsync(fetchMovieCredits, movieId);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className={s.castList}>
      {movie.cast.map(({ id, name, profile_path, character }) => (
        <li key={id} className={s.castItem}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            width="250"
            alt={name}
            className={s.castImg}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
