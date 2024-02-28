import React, { useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Form from './Form';
import { fetchMoviesByQuery } from 'services/api';
import { useAsync } from 'Hooks/useAsync';
import s from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const location = useLocation();
  const queryParams = useMemo(() => ({ query }), [query]);
  const [movies] = useAsync(fetchMoviesByQuery, queryParams);

  return (
    <>
      <Form setSearchParams={setSearchParams} />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                state={{ from: location }}
                to={movie.id.toString()}
                className={s.moviesItem}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
