/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Spinner } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FavoriteBtn } from 'ui';

const Home = ({ filmsList, onHandleFavorite }) => {
  // console.log(films);
  if (filmsList.length > 0) {
    return (
      <>
        <Row className="mt-3">
          {filmsList.map(({ Title, Year, imdbID, Type, Poster, isFavorite }) => (
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
                  <FavoriteBtn
                    status={isFavorite}
                    onHandleFavorite={onHandleFavorite}
                    id={imdbID}
                  />
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">More detailed</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }

  return <Spinner />;
};
// Home.defaultProps = {
//   films: PropTypes.any,
// };
Home.propTypes = {
  filmsList: PropTypes.array,
  onHandleFavorite: PropTypes.func,
};

export default Home;
