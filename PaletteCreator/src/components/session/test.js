import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return(
      <View style={{margin: 128}}>
        <Text onPress={Actions.pageOne}>
          Hello World!
        </Text>
      </View>
    )
  }
}
