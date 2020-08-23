import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import UsersContainer from './users/containers/UsersContainers';
import CalculatorContainer from './calculator/containers/CalculatorContainer';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/calculator">Money Calculator</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users">
            <UsersContainer />
          </Route>
          <Route path="/calculator">
            <CalculatorContainer />
          </Route>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
