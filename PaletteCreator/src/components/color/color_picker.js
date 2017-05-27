import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  StyleSheet,
  Text,
  View,
  Slider,
  Button
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
    return (value) => this.setState({ [color]: value });
  }

  _handleClick(){

  }
  render() {
    return(
      <View style={{flex:1}}>
        <View style={{flex: 2, backgroundColor:`rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`}}>
        </View>
        <View style={styles.slidersContainer}>
          <View style={styles.rgbValues}>
            <Text style={styles.red}>
              R:{Math.floor(this.state.r)}
            </Text>
            <Text style={styles.green}>
              G:{Math.floor(this.state.g)}
            </Text>
            <Text style={styles.blue}>
              B:{Math.floor(this.state.b)}
            </Text>
          </View>
          <View style={styles.sliders}>
            <Slider onValueChange={this._handleSlide('r')}
                    minimumValue={0}
                    maximumValue={255}
                    minimumTrackTintColor={'red'}
                    style={styles.slider}/>
            <Slider onValueChange={this._handleSlide('g')}
                    minimumValue={0}
                    maximumValue={255}
                    minimumTrackTintColor={'lime'}
                    style={styles.slider}/>
            <Slider onValueChange={this._handleSlide('b')}
                    minimumValue={0}
                    maximumValue={255}
                    minimumTrackTintColor={'blue'}
                    style={styles.slider}/>
          </View>
          <Button
            onPress={this._handleClick}
            title="Discover Colors"
            accessibilityLabel="Discover color palettes for selected color"
            color='blue'
                  />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slidersContainer: {
    flex:1
  },
  sliders: {
    flex:0,
    alignItems:'center',
    flexDirection: 'column',
    backgroundColor: 'whitesmoke'
  },
  slider: {
    width: '90%'
  },
  rgbValues: {
    flex: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'whitesmoke'
  },

  red:{
    color: 'red'
  },

  green:{
    color:'lime'
  },
  blue:{
    color:'blue'
  }
});
