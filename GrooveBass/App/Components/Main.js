// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
// var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');

var {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} = ReactNative;

class Main extends React.Component {
  static navigationOptions = {
    title: 'GrooveBass Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
      <Text style={styles.title}>Welcome to GrooveBass!</Text>
      <Text style={styles.container}>Your one-stop shop for finding local concerts and creating awesome playlists!</Text>
      <TouchableHighlight
        style={styles.button}
          onPress={() =>
              navigate('Location', {location: '80202'})
            }
          underlayColor="white">
          <Text style={styles.buttonText}> Fish for Shows</Text>
      </TouchableHighlight>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  accentRed: {
    color: '#ff5e5b',
    fontSize: 20
  },
  accentBlue: {
    color: '#00cecb',
    fontSize: 30
  },
  baseGray: {
    color: '#d8d8d8'
  },
  baseWhite: {
    color: '#ffffea'
  },
  darkBlue: {
    color: '#334d4d'
  },
  yellow:{
    color:'#ffed66'
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    textAlign: 'center',
    color:'#334d4d'
  },
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: '#00cecb'
  },
  title: {
    marginBottom: 15,
    fontSize: 25,
    textAlign: 'center',
    color: '#ffed66',
    fontWeight: 'bold'
  },
  buttonText: {
    fontSize: 18,
    color: '#ff5e5b',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  button: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
module.exports = Main;
