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

class About extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: "Bassholes",
  });
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View>
        <Text>View us in our splendor</Text>
      <Button
        title="Go back"
        onPress={() => goBack()}
      />
      </View>
    );
  }
}

module.exports = About;
