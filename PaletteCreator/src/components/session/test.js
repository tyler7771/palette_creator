import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return(
      <View style={{margin: 128}}>
        <Text>
          Hello World!
        </Text>
      </View>
    )
  }
}
