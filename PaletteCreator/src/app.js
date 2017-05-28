import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PageOne from './pageone.js';
import HelloWorld from './components/session/test.js';
import ColorPickerContainer from './components/color/color_picker_container.js';
import Icon from 'react-native-fa-icons';

export default class App extends Component {
  render() {
    return(
      <Router>
        <Scene key="root">
          <Scene key="test" component={HelloWorld} title="testing" initial={true}/>
          <Scene key="pageOne" component={PageOne} title="test2"/>
          <Scene key="colorPicker"
                 component={ColorPickerContainer}
                 title="Color Picker"
                 hideBackImage={true}
                 renderRightButton={() => <Icon name="bars" style={{ fontSize:25 }}/>}/>
        </Scene>
      </Router>
    )
  }
}
