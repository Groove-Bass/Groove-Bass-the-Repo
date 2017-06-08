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
    container: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        fontSize: 16
    },
    rowContent: {
        fontSize: 19
    }
});

class Concerts extends React.Component {
    getRowTitle(concert, item){
        item = (item === 'venueName') ? item= 'venue' : item;
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

    var list = []
    var concertDetails = ['artists', 'venueName',  'date', 'address', 'city', 'ticketUrl'];
      for (var i = 0; i < concertInfo.length; i++) {
           var currentList = concertDetails.map((item, index) => {
               if(!concertInfo[i][item]){
                   return <View key={index}/>
               } else {
                 if (item === 'ticketUrl') {
                   let currentURL = concertInfo[i][item]
                   console.log(currentURL);
                   return (
                     <View key={index}>
                         <View style={styles.rowContainer}>
                         <Text style={{color: 'blue'}}
                              onPress={() => Linking.openURL(currentURL)}>
                              Purchase Tickets Here
                        </Text>
                      </View>
                    </View>
                  )
                } else {
                   return (
                       <View key={index}>
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
           list.push(<View style={{ borderBottomColor: 'black', borderBottomWidth: 1}}></View>)
         }

    return (


      <ScrollView style={styles.container}>
          {list}
      </ScrollView>

    )
  }
};



module.exports = Concerts;
