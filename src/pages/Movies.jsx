import { Suspense, useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import { SearchForm } from '../components/SerchForm/Search';
import { SearchedMovies } from '../components/ListOfSearchedMovies/ListOfSearchedMovies';
import { fetchFilteredMovies } from '../fetchAPI';
import { Loader } from '../components/Loader';

const Movies = () => {
  const [films, setFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (movieName !== ``) {
      fetchFilteredMovies(movieName).then(data => setFilms(data));
    }
  }, [movieName]);

  const onSubmitSerach = name => {
    setFilms([]);

    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <SearchForm onSearch={onSubmitSerach} />
        <Link state={{ from: `/movies/${searchParams}` }}>
          <SearchedMovies listOFfilms={films} state={{ from: location }} />
        </Link>
      </Suspense>
    </>
  );
};

export default Movies;