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

const Home = ({ films }) => {
  console.log(films);
  return (
    <>
      <Row className="mt-3">
        {films ? (
          films.map(({ Title, Year, imdbID, Type, Poster }) => (
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
                  <Button variant="outline">
                    <i className="bi bi-heart fs-2" />
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">More detailed</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Spinner />
        )}
      </Row>
    </>
  );
};
// Home.defaultProps = {
//   films: PropTypes.any,
// };
Home.propTypes = {
  films: PropTypes.array,
};

export default Home;
