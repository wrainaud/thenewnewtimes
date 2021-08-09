import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from './components/Grid'
import Main from './pages/Main';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';

const App = () => (
  <Router>
    <Container >
      <Nav/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/saved" component={Saved}/>
        <Route component={NoMatch}/>
      </Switch>
      <Nav2/>
      <Switch>
        <Route exact path="http://wrainaud.com/" component={() => {
          window.location.href = 'https://wrainaud.com';
          return null;
        }}/>
      </Switch>
      <AmplifySignOut/>
    </Container>
  </Router>
);

export default withAuthenticator(App);