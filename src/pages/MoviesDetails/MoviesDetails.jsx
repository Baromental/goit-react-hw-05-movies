import React, { Suspense, useRef } from 'react';
import { useParams, NavLink, Outlet, useLocation, Link, } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { useAsync } from 'Hooks/useAsync';
import s from './MoviesDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie] = useAsync(fetchMovieDetails, movieId);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <section className={s.moviesDetails}>
        <Link to={goBackRef.current} className={s.btnGoBack}>
          Go back
        </Link>
        <div className={s.wrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title || movie.name}
            width="300"
          />

          <div>
            <h2>{movie.title || movie.name}</h2>
            <p>User score: {movie.vote_average} </p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(genre => `${genre.name} `)}</p>
          </div>
        </div>
      </section>
      <section>
        <nav>
          <ul className={s.listLinks}>
            <li>
              <NavLink to="cast" className={s.itemLink}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={s.itemLink}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};

export default MovieDetails;
