/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { Provider } from 'react-redux';
 import configureStore from './src/store/store.js';
 import { Router, Scene } from 'react-native-router-flux';
 import App from './src/app.js';

 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';

 const store = configureStore();

 export default class PaletteCreator extends Component {

   render() {
     return (
       <View style={{flex:1}}>
         <Provider store={store}>
           <App/>
         </Provider>
       </View>
     );
   }
 }


 AppRegistry.registerComponent('PaletteCreator', () => PaletteCreator);
