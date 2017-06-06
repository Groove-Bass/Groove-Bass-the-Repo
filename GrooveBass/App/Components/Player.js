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
    // title: "BassGroovin'",
    title: navigation.state.params.location,
    artist: navigation.state.params.artist
  });
  constructor(props){
    console.log(props, 'props');
    super(props);
    this.state = {
      artist: props.navigation.state.params.artist,
      error: false
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>iframe playlist & concert info here</Text>
        <Text>{this.state.artist.items[0].name}</Text>
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
