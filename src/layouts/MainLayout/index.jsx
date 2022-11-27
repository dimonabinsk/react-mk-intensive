import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  // eslint-disable-next-line no-console
  //   console.log('children', children);
  return (
    <Container>
      <h1 className="mt-3 mb-3">{isHome ? 'All Films' : 'Favorite Films'}</h1>
      <Nav variant="pills" className="justify-content-center" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link as={Link} to="/" href="/">
            All Films
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/favorites" eventKey="/favorites">
            Favorites Films
          </Nav.Link>
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
