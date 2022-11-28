/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { CardFilmsList } from 'components';

const Favorites = ({ filmsList, onHandleFavorite }) => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/');
  };

  if (filmsList.length > 0) {
    return (
      <>
        <CardFilmsList filmsList={filmsList} onHandleFavorite={onHandleFavorite} />
      </>
    );
  }

  return (
    <div>
      <h3>No favorite movies</h3>
      <Button className="btn btn-primary" onClick={handleGoBack}>
        All Films
      </Button>
    </div>
  );
};

Favorites.propTypes = {
  filmsList: PropTypes.array,
  onHandleFavorite: PropTypes.func,
};

export default Favorites;
