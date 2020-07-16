import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from '../Footer';
import { ErrorBoundary } from '../ErrorBoundary';
import MoviePage from '../../containers/MoviePage';
import SearchPage from '../../containers/SearchPage';
import { NotFoundPage } from '../NotFoundPage';

export function MovieApp() {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/">
            <SearchPage isDefault />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/film/:id">
            <MoviePage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </ErrorBoundary>
      <Footer />
    </Router>
  );
}
