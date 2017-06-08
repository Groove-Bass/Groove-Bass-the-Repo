import React, { Component } from 'react';
var ReactNative = require('react-native');
var jamapi = require('../Utils/jamapi');

<<<<<<< HEAD


// var Dashboard = require('./Dashboard');
var sapi = require('../Utils/spotifyapi');


=======
>>>>>>> 6b964f371c4cb63749070c60ed88efe0f6b1d2f1
var {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicatorIOS,
  ScrollView
} = ReactNative;

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
  } from 'react-native-form-generator';

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
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  }
});



class Location extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Enter Location',
  });
    constructor(props){
     super(props);
     this.state = {
       error: false,
       formData: '',
       concertData: '',
     }
   }

  handleFormChange(formData){
      this.setState({formData:formData})
      this.props.onFormChange && this.props.onFormChange(formData);
    }

  handleSubmit(){
    console.log('hit submit');
    // console.log(this.refs.registrationForm.values)
    var location = this.refs.registrationForm.values.location
    var radius = this.refs.registrationForm.values.radius

        jamapi.getMusic(location, radius)
        .then((res) => {
            this.setState({concertData: res})
            this.props.navigation.navigate('Concerts', {concertData: this.state.concertData})
            this.setState({
             error: false,
           })
        })
      .catch ((err) => {
         console.log('error', err)
       })
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Form ref='registrationForm'
          onChange={this.handleFormChange.bind(this)}
          label="Location Information">
        <InputField
           ref='location'
           label='Location'
           placeholder='Zipcode'/>
        <InputField
           ref='radius'
           label='Radius'
           placeholder='radius'/>
      </Form>
       <TouchableHighlight
           style={styles.button}
           onPress={this.handleSubmit.bind(this)}
           underlayColor="white">
           <Text style={styles.buttonText}> SEARCH </Text>
       </TouchableHighlight>
      </View>

    );
  }
}

// <Button
//   title="Search your location"
//   onPress={() =>
//     navigate('Player', {'location': this.state.location},{'radius': this.state.radius})
//   }
// />


// <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200}}>
  // </ScrollView>
module.exports = Location;
