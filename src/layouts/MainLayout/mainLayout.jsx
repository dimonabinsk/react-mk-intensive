import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <Container>
      <h1 className="mt-3 mb-3">{isHome ? 'All Films' : 'Favorite Films'}</h1>
      <Nav variant="pills" className="justify-content-center">
        <Nav.Item>
          <NavLink to="/" exact className="nav-link">
            All Films
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/favorites" className="nav-link">
            Favorites Films
          </NavLink>
        </Nav.Item>
      </Nav>
      {children}
    </Container>
  );
};

MainLayout.defaultProps = {
  children: 'Children',
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
