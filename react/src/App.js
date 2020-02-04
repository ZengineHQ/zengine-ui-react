import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import NavMenu from './components/NavMenu';

const Home = lazy(() => import('./pages/Home'));
const FormsDemo = lazy(() => import('./pages/Forms'));
const PageNotFound = lazy(() => import('./pages/NotFound'));
const StyleGuide = lazy(() => import('./pages/StyleGuide'));

function App() {
  return (
    <Router>
      <NavMenu></NavMenu>

      <ErrorBoundary>
        <Suspense fallback={ <Loader /> }>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/style-guide" component={ StyleGuide } />
            <Route exact path="/forms" component={ FormsDemo } />

            <Route component={ PageNotFound } />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
