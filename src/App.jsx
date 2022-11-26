import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import { MainLayout } from 'layouts';
import { Favorites, Home } from 'pages';
import { useGetFilms } from 'hooks';

const App = () => {
  const { films, isLoading } = useGetFilms();
  // console.log(films);
  console.log(isLoading);
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            {isLoading ? <Spinner /> : <Home films={films} />}
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
