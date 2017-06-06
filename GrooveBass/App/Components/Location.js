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

class Location extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.location,
  });
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Add input for Zipcode here; handle submit to API</Text>
      <Button
        title="Go to the Player Page"
        onPress={() =>
          navigate('Player', {location: '80202'})
        }
      />
      </View>
    );
  }
}

module.exports = Location;
