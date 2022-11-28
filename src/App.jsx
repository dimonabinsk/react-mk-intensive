import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import Spinner from 'react-bootstrap/Spinner';
import { MainLayout } from 'layouts';
import { Favorites, Home } from 'pages';
import { useGetFilms } from 'hooks';

const App = () => {
  const { films, isLoading } = useGetFilms();
  const [isFilms, setFilms] = useState([]);
  const [isFavoriteFilms, setFavoriteFilms] = useState([]);

  useEffect(() => {
    setFilms(films);
  }, [films]);
  const handleAddFavoriteFilms = (id) => {
    const newFilms = isFilms.map((item) => {
      if (id === item.imdbID) {
        return {
          ...item,
          isFavorite: !item.isFavorite,
        };
      }
      return { ...item };
    });
    setFilms(newFilms);
  };

  useEffect(() => {
    if (isFilms.length > 0) {
      const favoriteFilms = isFilms.filter((film) => film.isFavorite === true);
      // console.log(favoriteFilms);
      setFavoriteFilms(favoriteFilms);
    }
  }, [isFilms]);
  let newSortedFilms = [];
  if (isFilms.length) {
    const sortedFavoriteFilms = _.partition(isFilms, (o) => o.isFavorite);
    newSortedFilms = [...sortedFavoriteFilms[0], ...sortedFavoriteFilms[1]];
    // console.log(newSortedFilms);
  }

  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            {isLoading ? (
              <Spinner />
            ) : (
              <Home
                filmsList={newSortedFilms.length > 0 ? newSortedFilms : isFilms}
                onHandleFavorite={handleAddFavoriteFilms}
              />
            )}
          </Route>
          <Route path="/favorites">
            {isLoading ? (
              <Spinner />
            ) : (
              <Favorites filmsList={isFavoriteFilms} onHandleFavorite={handleAddFavoriteFilms} />
            )}
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
