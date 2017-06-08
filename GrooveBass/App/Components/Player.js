// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
// var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicatorIOS
} = ReactNative;

var styles = StyleSheet.create({
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
    color: '#ff5e5b',
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
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    textAlign: 'center',
    color:'#334d4d'
  }
});

class Player extends React.Component {
  static navigationOptions = ({navigation}) => ({
   title: "BassGroovin'",
  //  title: navigation.state.params.location,
   concert: navigation.state.params
 });
 constructor(props){
   console.log(props, 'props');
   super(props);

   this.state = {
     concert: props.navigation.state.params,
     error: false
   }
 }
  render() {
    const { navigate } = this.props.navigation;
    console.log('hey');
    console.log(this.state.concert);
    return (
      <View style={styles.mainContainer}>
        <Text>iframe playlist & concert info here</Text>
      <Button
        title="Go to the Saved Concerts Page"
        onPress={() =>
          navigate('Concerts')
        }
      />
      </View>
    );
  }
}

module.exports = Player;
