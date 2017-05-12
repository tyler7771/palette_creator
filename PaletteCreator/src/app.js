import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HelloWorld from './components/session/test.js';

export default class App extends Component {
  render() {
    return(
      <Router>
        <Scene key="root">
          <Scene key="test" component={HelloWorld} title="testing" initial={true}/>
        </Scene>
      </Router>
    )
  }
}
