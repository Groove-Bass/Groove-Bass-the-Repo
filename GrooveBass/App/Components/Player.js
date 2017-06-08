// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
import HTMLView from 'react-native-htmlview';
import { Player, ReactNativeAudioStreaming } from 'react-native-audio-streaming';

var sapi = require('../Utils/spotifyapi');
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
    console.log(props.navigation.state.params, 'props');
    super(props);

    this.state = {
      artist: props.navigation.state.params,
      preview: '',
      error: false
    }
  }
  // componentDidMount(){
  //   console.log('hello');

  // }
  render() {
    const { navigate } = this.props.navigation;

    sapi.getArtist(this.state.artist.artist.artistName)
    .then((res) => {
      console.log('player tracks', res.preview_url);
      this.state.preview = res.preview_url
      // return preview
    })
    console.log(this.state.preview);


    return (
      <Player url={`"${this.state.preview}"`} />
    );
  }
}
