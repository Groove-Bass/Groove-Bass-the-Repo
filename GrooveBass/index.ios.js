import React, { Component } from 'react'
var ReactNative = require('react-native')

var Main = require('./App/Components/Main')
var Location = require('./App/Components/Location')
var Player = require('./App/Components/Player')
var Concerts = require('./App/Components/Concerts')
var About = require('./App/Components/About')

var {
    AppRegistry,
    StyleSheet,
    Text,
    View
} = ReactNative

import {
  StackNavigator
} from 'react-navigation'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
})

const GrooveBass = StackNavigator({
  Main: {screen: Main},
  Location: {screen: Location},
  Player: {screen: Player},
  Concerts: {screen: Concerts},
  About: {screen: About}
})

AppRegistry.registerComponent('GrooveBass', () => GrooveBass)
