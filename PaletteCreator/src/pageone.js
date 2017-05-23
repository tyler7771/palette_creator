import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
    return(
      <View style={{margin: 128}}>
        <Text onPress={Actions.colorPicker}> this is the next page PogChamp </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red'
  }
})
