import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Footer from '../footer/footer';

import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return(
      <View style={{marginTop: 100, flex: 1}}>
        <ScrollView>
          <Text onPress={Actions.pageOne}>
            Hello World!
          </Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
