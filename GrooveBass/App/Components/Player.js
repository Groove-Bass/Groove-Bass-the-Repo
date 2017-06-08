// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
// var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');
import { Player } from 'react-native-audio-streaming';


var {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicatorIOS
} = ReactNative;

export default class PlayerUI extends React.Component {
 //  static navigationOptions = ({navigation}) => ({
 //   title: "BassGroovin'",
 //  //  title: navigation.state.params.location,
 //   concert: navigation.state.params
 // });
 // constructor(props){
 //   console.log(props, 'props');
 //   super(props);
 //
 //   this.state = {
 //     concert: props.navigation.state.params,
 //     error: false
 //   }
 // }
  render() {
    // const { navigate } = this.props.navigation;
    console.log('hey');
    // console.log(this.state.concert);

    sapi.getArtist(this.state.artist.artist.artistName)
    .then((res) => {
      console.log('player tracks', res.preview_url);
      this.state.preview = res.preview_url
      // return preview
    })
    console.log(this.state.preview);
    return (
      <View>
      <Player url={"http://lacavewebradio.chickenkiller.com:8000/stream.mp3"} />
      </View>
    );
  }
}

module.exports = PlayerUI;
