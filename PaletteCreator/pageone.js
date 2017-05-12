import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
    return(
      <View>
        <Text style={styles.red}>this is pageone </Text>
        <Text>asdasdasdasdasdasdsadasdsafsadsada </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red'
  }
})
