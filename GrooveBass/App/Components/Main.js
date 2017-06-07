// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
// var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');
var sapi = require('../Utils/spotifyapi');

var {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} = ReactNative;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

class Main extends React.Component {
  static navigationOptions = {
    title: 'Bass Groove Home',
  };
  constructor(props){
    super(props);
    this.state = {
      artist: '',
      error: false
    }
  }
  artistChange(event){
    this.setState({
      artist: event.nativeEvent.text
    })
  }
  submitArtist(){
    sapi.getArtist(this.state.artist)
    .then((res) => {
      this.props.navigation.navigate('Player', {artist: res})
    })
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Text>Add Spofity OAuth Here</Text>
      <TextInput
        style={styles.searchInput}
        value={this.state.artist}
        onChange={this.artistChange.bind(this)} />
      <TouchableHighlight
        style={styles.button}
        onPress={this.submitArtist.bind(this)}
        underlayColor="white">
        <Text>SEARCH ARTIST</Text>
      </TouchableHighlight>
      <Text></Text>
      <Button
        title="Go to the Location Page"
        onPress={() =>
          navigate('Location', { location: '80202' })
        }
      />
    </View>
    );
  }
}

module.exports = Main;
