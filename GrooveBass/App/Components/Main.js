// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
// var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');

// var pic = {src:'./Glogo.png'}

var {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image
} = ReactNative;

class Main extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
      <Image style={{flex:1, height: '50%', width: '50%', alignSelf: 'center'}} source={require('./Glogo.png')} resizeMode="contain"
      />
      <Text style={styles.title}> GrooveBass</Text>
      <Text style={styles.container}>Your one-stop shop for finding local concerts and creating awesome playlists</Text>
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
    padding: 20,
    textAlign: 'center',
    color:'#334d4d',
    fontSize: 18
  },
  mainContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: '#00cecb'
  },
  title: {
    fontSize: 35,
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
