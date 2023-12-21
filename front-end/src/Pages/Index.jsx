import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PostcardsPage from './components/PostcardsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/postcards" component={PostcardsPage} />
      </Switch>
    </Router>
  );
}

export default App;
