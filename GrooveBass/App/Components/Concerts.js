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

class Concerts extends React.Component {
  static navigationOptions = ({navigation}) => ({
   title: "Local Concerts",
  //  title: navigation.state.params.location,
   concert: navigation.state.params.concertData
 });
 constructor(props){
   console.log('data is????');
   console.log(props.navigation.state.params);
   super(props);

   this.state = {
     concert: props.navigation.state.params,
     error: false
   }
 }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>View saved concerts</Text>
      <Button
        title="Go to the About Us Page"
        onPress={() =>
          navigate('About', {location: '80202'})
        }
      />
      </View>
    );
  }
}

module.exports = Concerts;
