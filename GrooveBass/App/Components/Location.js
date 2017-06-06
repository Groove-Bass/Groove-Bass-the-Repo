// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicatorIOS,
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




class Location extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Enter Location',
  });
  constructor(props){
    super(props);
    this.state = {
      location: '',
      error: false
    }
  }
  handleChange(event){
    this.setState({
      location: event.nativeEvent.text
    })
  }
  handleSubmit(){
    // TODO: addd acutaly api here
    api.getConcerts(this.state.location)
         .then((res) => {
           if(res.message === 'Not Found'){
             this.setState({
               error: 'Location not found',
             })
           } else {
             this.props.navigation.navigate('Player', {'location': this.state.location})
             this.setState({
               error: false,
               location: ''
             })
           }
         })
         .catch ((err) => {
           console.log('error', err)
         })

  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Add input for Zipcode here; handle submit to API</Text>
        <Text style={styles.title}> Enter your Zip Code </Text>
         <TextInput
           style={styles.searchInput}
           value={this.state.location}
           onChange={this.handleChange.bind(this)} />
           <TouchableHighlight
             style={styles.button}
             onPress={this.handleSubmit.bind(this)}
             underlayColor="white">
             <Text style={styles.buttonText}> SEARCH </Text>
           </TouchableHighlight>
        <Button
          title="Search your location"
          onPress={() =>
            navigate('Player', {'location': this.state.location})
          }
        />
      </View>
    );
  }
}

module.exports = Location;
