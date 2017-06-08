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
      <View>
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
