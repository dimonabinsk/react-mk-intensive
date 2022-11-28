/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardFilm } from '../cardFilm';

const CardFilmsList = ({ filmsList, onHandleFavorite }) => (
  <Row className="mt-3">
    {filmsList.map(({ Title, Year, imdbID, Type, Poster, isFavorite }) => (
      <Col key={imdbID}>
        <CardFilm
          title={Title}
          year={Year}
          type={Type}
          poster={Poster}
          favorite={isFavorite}
          id={imdbID}
          onHandleFavorite={onHandleFavorite}
        />
      </Col>
    ))}
  </Row>
);

CardFilmsList.propTypes = {
  filmsList: PropTypes.array,
  onHandleFavorite: PropTypes.func,
};

export default CardFilmsList;
