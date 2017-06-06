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
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>iframe playlist & concert info here</Text>
      <Button
        title="Go to the Saved Concerts Page"
        onPress={() =>
          navigate('Concerts', {location: '80202'})
        }
      />
      </View>
    );
  }
}

module.exports = Player;
