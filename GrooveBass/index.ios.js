import React, { Component } from 'react'
var Main = require('./App/Components/Main')
var ReactNative = require('react-native')

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
  Main: {screen: Main}
})

AppRegistry.registerComponent('GrooveBass', () => GrooveBass)
