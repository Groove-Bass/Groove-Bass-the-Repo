import React, { Component } from 'react'
var ReactNative = require('react-native')

var Main = require('./App/Components/Main')
var Location = require('./App/Components/Location')

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
  Location: {screen: Location}
})

AppRegistry.registerComponent('GrooveBass', () => GrooveBass)
