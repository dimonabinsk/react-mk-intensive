/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const FavoriteBtn = ({ status, onHandleFavorite, id }) => (
  <Button variant="outline" onClick={() => onHandleFavorite(id)}>
    <i className={`bi bi-heart${status ? '-fill' : ''} fs-2 text-warning`} />
  </Button>
);

FavoriteBtn.propTypes = {
  status: PropTypes.bool,
  onHandleFavorite: PropTypes.func,
  id: PropTypes.string,
};

export default FavoriteBtn;
