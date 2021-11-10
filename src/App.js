import React, { Component } from 'react';
import StrictAccess from './components/StrictAccess';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>


        <Link to="/" > Home </Link>
        <Link to="/about" > About </Link>
        <Link to="/users/Joao" > Users </Link>
        <Link to="/strict-access" > Strict Access </Link>

        <Switch>

          <Route
            path="/users/:id"
            render={ (props) => <Users {...props} greetingsMessage="Good Morning" /> }
          />

          <Route path="/about" component={ About } />

          <Route
            path="/strict-access"
            render={ () => <StrictAccess user={ { username:"adam" , password:"1234", } } /> }
          />

          <Route exact path="/" component={ Home } />

        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
