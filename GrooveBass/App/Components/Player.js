import React, { Component } from 'react'
var ReactNative = require('react-native')
import { Player } from 'react-native-audio-streaming'

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicatorIOS
} = ReactNative

export default class PlayerUI extends React.Component {
  render () {
    console.log('hey')

    sapi.getArtist(this.state.artist.artist.artistName)
    .then((res) => {
      console.log('player tracks', res.preview_url)
      this.state.preview = res.preview_url
    })
    console.log(this.state.preview)
    return (
      <View>
        <Player url={'http://lacavewebradio.chickenkiller.com:8000/stream.mp3'} />
      </View>
    )
  }
}

module.exports = PlayerUI
