/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FavoriteBtn } from 'ui';
import { useHistory } from 'react-router-dom';

const Favorites = ({ favoriteFilmsList, onHandleFavorite }) => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/');
  };
  // console.log(films);
  if (favoriteFilmsList.length > 0) {
    return (
      <Row className="mt-3">
        {favoriteFilmsList.map(({ Title, Year, imdbID, Type, Poster, isFavorite }) => (
          <Col key={imdbID}>
            <Card style={{ width: '18rem', height: '45rem' }} className="mt-5">
              <Card.Body>
                <Card.Img variant="top" src={Poster} style={{ maxHeight: '20rem' }} />
              </Card.Body>
              <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>{Type}</Card.Text>
                <Card.Text>{Year}</Card.Text>
              </Card.Body>
              <Card.Body style={{ display: 'flex', justifyContent: 'center' }}>
                <FavoriteBtn status={isFavorite} onHandleFavorite={onHandleFavorite} id={imdbID} />
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">More detailed</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
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
  favoriteFilmsList: PropTypes.array,
  onHandleFavorite: PropTypes.func,
};

export default Favorites;
