// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
// var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');
import  PlayerUI  from './Player';
var sapi = require('../Utils/spotifyapi')
import { Player } from 'react-native-audio-streaming';

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
      flex: 1,
      // position: 'absolute'
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
    },
    stickyHeader: {
      position: 'relative',
      top: 91
    },
    listContainer: {
      position: 'relative',
      top: 151
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
   concert: navigation.state.params.concertData,
   artist: navigation.state.params.concertData
 });
 constructor(props){
   super(props);

   console.log(props.navigation.state.params.concertData[0].artistName[0].Name);

   this.state = {
     concert: props.navigation.state.params.concertData,
     artist: props.navigation.state.params.concertData[0].artistName,
     preview: 'not here yet',
     error: false
   }
 }

 componentWillMount() {
   sapi.getArtist(this.state.artist)
   .then((res) => {
     this.setState({preview:res.preview_url})
    //  this.state.preview = res.preview_url
     return true;
   })
   .catch ((err) => {
      console.log('error', err)
      isLoading: false
    })
 }


  render() {
    console.log('preivew');
    console.log(this.state.preview);
    const { navigate } = this.props.navigation;
    var concertInfo = this.state.concert
    // ADD useable names for population on the concerts list
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
    // Add useable date formate for concerts list    var artists = ""
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
          //  list.push(<View>
          //    <PlayerUI />
          //  </View>)
           currentList = ""
           list.push(<View style={{ borderBottomColor: 'black', borderBottomWidth: 1}}></View>)

         }
    // //end jambase begin spotifyapi
    // sapi.getArtist(this.state.artist)
    // .then((res) => {
    //   // this.setState({preview:res.preview_url})
    //   this.state.preview = res.preview_url
    //   return true;
    // })

    return (
        <ScrollView style={styles.container}>
          <View style={styles.stickyHeader}>
          <Player url={this.state.preview} />
          {/* <Player url= {'https://p.scdn.co/mp3-preview/aa88c40463c37cce4fee2cea1925e42fd1aa83b0?cid=3061c2868ac84b9fb2bacebfae61eba3'} /> */}
          </View>
          <View style={styles.listContainer}>
            {list}
          </View>
        </ScrollView>

        // <PlayerUI />
    )
  }
};



module.exports = Concerts;
