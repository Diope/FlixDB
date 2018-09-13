/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../App.css';


import MoviesList from '../components/MoviesList';
import MovieDetail from '../components/MovieDetail';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <div className="App-logo">
            FlixDB
          </div>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
