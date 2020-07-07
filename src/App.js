import React, { Component } from 'react';
import {Home, Signup,} from 'pages';
import { Route ,Switch} from 'react-router-dom';
import { signIn } from 'components/Login';

class App extends Component{
  render() {
    return(
      <div>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/signup/:number" component={Signup} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  };
};


export default App;

