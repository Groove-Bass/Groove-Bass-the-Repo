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
  ScrollView,
  Linking,
  TouchableHighlight,
  ActivityIndicatorIOS
} = ReactNative;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    backgroundColor: '#00cecb'
  },
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    color:'#334d4d'
  },
  buttonText: {
    fontSize: 18,
    color: '#ff5e5b',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  rowContainer: {
    color:'#334d4d'
  },
  rowTitle: {
    color:'#ffed66',
    fontSize: 16,
    fontWeight: 'bold'
  },
  rowContent: {
    fontSize: 19,
    color:'#334d4d'
  },
  button: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 5,
    paddingLeft: 8,
    paddingRight: 8,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

class Concerts extends React.Component {
    getRowTitle(concert, item){
        item = (item === 'venueName') ? item= 'venue' : item;
        item = (item === 'showDate') ? item = 'date' :item;
        return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
    }

  static navigationOptions = ({navigation}) => ({
   title: "Local Concerts",
   concert: navigation.state.params.concertData
 });
 constructor(props){
   super(props);

   this.state = {
     concert: props.navigation.state.params.concertData,
     error: false
   }
 }
  render() {
    const { navigate } = this.props.navigation;
    var concertInfo = this.state.concert
    var artists = ""
    for (var i = 0; i < concertInfo.length; i++) {
      for (var j = 0; j < concertInfo[i].artistName.length; j++){
        artists += concertInfo[i].artistName[j].Name
        artists += ", "
      }
      artists = artists.substr(0, artists.length-2)
      concertInfo[i]['artists'] = artists
      artists = []
    }
    let newdate = ""
        for (var i = 0; i < concertInfo.length; i++) {
            newdate = concertInfo[i].date.substr(0, concertInfo[i].date.length-9)
            let startDate = newdate.substr(5)
            let endDate = '-' + newdate.substr(0, 4)
            let fullDate = startDate + endDate
            concertInfo[i]['showDate'] = fullDate
            newdate = []
          }
    var list = []
    var concertDetails = ['artists', 'venueName',  'showDate', 'address', 'city', 'ticketUrl'];
      for (var i = 0; i < concertInfo.length; i++) {
        var currentList = concertDetails.map((item, index) => {
          if(!concertInfo[i][item]){
            return <View key={index}/>
            } else {
              if (item === 'ticketUrl') {
                let currentURL = concertInfo[i][item]
                return (
                  <View key={index} style={styles.mainContainer}>
                  <View style={styles.rowContainer}>
                    <TouchableHighlight style={styles.button}
                      onPress={() => Linking.openURL(currentURL)} underlayColor="white">
                      <Text style={styles.buttonText}>Buy Tickets</Text>
                    </TouchableHighlight>
                  </View>
                  </View>
                )} else {
                  return (
                    <View key={index} style={styles.mainContainer}>
                    <View style={styles.rowContainer}>
                       <Text style={styles.rowTitle}> {this.getRowTitle(concertInfo[i], item)} </Text>
                       <Text style={styles.rowContent}> {concertInfo[i][item]} </Text>
                    </View>
                    </View>
                  )
                }
              }
            })
           list.push(currentList)
           currentList = ""
           list.push(<View style={{ borderBottomColor: '#334d4d', borderBottomWidth: 1}}></View>)
      }
      return (
      <ScrollView>
          {list}
      </ScrollView>
    )
  }
};

module.exports = Concerts;
