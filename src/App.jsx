import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from 'components/Layout.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Movies = lazy(() => import('./pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('./pages/MoviesDetails/MoviesDetails.jsx'));
const Cast = lazy(() => import('./pages/MoviesDetails/Cast.jsx'));
const Reviews = lazy(() => import('./pages/MoviesDetails/Reviews.jsx'));

export const App = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
        </Routes>
      </Suspense>
  );
}

export default App;