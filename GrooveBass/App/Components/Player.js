// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
import HTMLView from 'react-native-htmlview';
import { Player, ReactNativeAudioStreaming } from 'react-native-audio-streaming';


// var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicatorIOS,
  WebView
} = ReactNative;

class PlayerUI extends React.Component {
  static navigationOptions = ({navigation}) => ({
    // title: "BassGroovin'",
    title: navigation.state.params.location,
    artist: navigation.state.params
  });
  constructor(props){
    console.log(props, 'props');
    super(props);
    this.state = {
      artist: props.navigation.state.params,
      error: false
    }
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
      <Text>Hello</Text>
      <Player url={"https://p.scdn.co/mp3-preview/728a8b5dd1a88cf02fcb0a6ba53be0268b1ec933?cid=3061c2868ac84b9fb2bacebfae61eba3"} />
      </View>
    );
  }
}

module.exports = PlayerUI;
