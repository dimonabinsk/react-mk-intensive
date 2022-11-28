/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import { Spinner } from 'react-bootstrap';

import { CardFilmsList } from 'components';

const Home = ({ filmsList, onHandleFavorite }) => {
  // console.log(films);
  if (filmsList.length > 0) {
    return (
      <>
        <CardFilmsList filmsList={filmsList} onHandleFavorite={onHandleFavorite} />
      </>
    );
  }

  return <Spinner />;
};

Home.propTypes = {
  filmsList: PropTypes.array,
  onHandleFavorite: PropTypes.func,
};

export default Home;
