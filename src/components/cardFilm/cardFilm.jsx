/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FavoriteBtn } from 'ui';

const CardFilm = ({ title, year, id, type, poster, favorite, onHandleFavorite }) => (
  <Card style={{ width: '18rem', height: '45rem' }} className="mt-5">
    <Card.Body>
      <Card.Img variant="top" src={poster} style={{ maxHeight: '20rem' }} />
    </Card.Body>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{type}</Card.Text>
      <Card.Text>{year}</Card.Text>
    </Card.Body>
    <Card.Body style={{ display: 'flex', justifyContent: 'center' }}>
      <FavoriteBtn status={favorite} onHandleFavorite={onHandleFavorite} id={id} />
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">More detailed</Button>
    </Card.Footer>
  </Card>
);

CardFilm.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  poster: PropTypes.string,
  favorite: PropTypes.bool,
  onHandleFavorite: PropTypes.func,
};

export default CardFilm;
