import React, { Component } from 'react';
var Main = require('./App/Components/Main');
var ReactNative = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View
} = ReactNative;

import {StackNavigator} from 'react-navigation';

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

// var GrooveBass = React.createClass({
class GrooveBass extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    return (
      <Text>Nav workin</Text>
    );
  }
  const Groovin = StackNavigator({
    Home: {screen:GrooveBass}
  })
});
AppRegistry.registerComponent('Groovin', () => Groovin);
