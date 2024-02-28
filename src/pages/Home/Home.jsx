import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import { useAsync } from 'Hooks/useAsync';
import s from './Home.module.css';

const Home = () => {
  const [movies] = useAsync(fetchTrendingMovies);
  const location = useLocation();
  
  return (
    <section>
      <h1 className={s.moviesPageTitle}>Trending today</h1>
      <ul className={s.moviesList}>
        {movies?.map(movie => (
          <li key={movie.id} className={s.moviesItem}>
            <Link
              state={{ from: location }}
              to={`movies/${movie.id.toString()}`}
              className={s.moviesLink}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
