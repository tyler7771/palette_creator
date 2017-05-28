import React, { PropTypes, Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import Icon from 'react-native-fa-icons';
import styles from './styles';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <TouchableHighlight>
        <Text style={{ fontSize: 45, color: 'blue' }}>
          <Icon name='user' allowFontScaling />
        </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
