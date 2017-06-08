import React, { Component } from 'react';
var ReactNative = require('react-native');
var jamapi = require('../Utils/jamapi');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
  Image
} = ReactNative;

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
  } from 'react-native-form-generator';

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
  },
  container: {
    color:'#334d4d'
  }
});

class Location extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Location',
  });
    constructor(props){
     super(props);
     this.state = {
       error: false,
       formData: '',
       concertData: '',
       isLoading: false,
     }
   }

  handleFormChange(formData){
      this.setState({formData:formData})
      this.props.onFormChange && this.props.onFormChange(formData);
    }

  handleSubmit(){
    this.setState({
     isLoading: true,
     error: false
   })
    var location = this.refs.registrationForm.values.location
    var radius = this.refs.registrationForm.values.radius

        jamapi.getMusic(location, radius)
        .then((res) => {
            this.setState({concertData: res})
            this.props.navigation.navigate('Concerts', {concertData: this.state.concertData})
            this.setState({
             error: false,
             isLoading: false
           })
        })
      .catch ((err) => {
         console.log('error', err)
       })
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Form ref='registrationForm'
          onChange={this.handleFormChange.bind(this)}
          label="Location Information">
        <InputField style={styles.container}
           ref='location'
           label='Location'
           placeholder='zipcode'/>
        <InputField style={styles.container}
           ref='radius'
           label='Search Radius'
           placeholder='(in miles)'/>
      </Form>
       <TouchableHighlight
           style={styles.button}
           onPress={this.handleSubmit.bind(this)}
           underlayColor="white">
           <Text style={styles.buttonText}> Cast Your Line </Text>
       </TouchableHighlight>
       <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large">
        </ActivityIndicator>
        <Image
          style={{flex:1, height: '50%', width: '50%', alignSelf: 'center'}} source={require('./bobber.png')} resizeMode="contain"
        />
      </View>


    );
  }
}

module.exports = Location;
