import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

export default class ColorPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      r: 0,
      g: 0,
      b: 0
    };
    this._handleSlide = this._handleSlide.bind(this);
  }

  _handleSlide(color){
    return (value) => {
      this.setState({ color: value });
    }
  }

  render() {
    return(
      <View style={{flex:1}}>
        <View style={styles.color}>
        </View>
        <View style={styles.sliders}>
          <Slider onValueChange={this._handleSlide('r')}
                  minimumValue={0}
                  maximumValue={255}
                  minimumTrackTintColor={'red'}/>
          <Slider onValueChange={this._handleSlide('g')}
                  minimumValue={0}
                  maximumValue={255}
                  minimumTrackTintColor={'lime'}/>
          <Slider onValueChange={this._handleSlide('b')}
                  minimumValue={0}
                  maximumValue={255}
                  minimumTrackTintColor={'blue'}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: 'blue',
    flex: 2
  },

  sliders: {
    flex: 1
  }
});
