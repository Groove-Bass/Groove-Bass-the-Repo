// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
// var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicatorIOS
} = ReactNative;

class Player extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: "BassGroovin'",
  });
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title="Go back"
        onPress={() => goBack()}
      />
    );
  }
}

module.exports = Player;
