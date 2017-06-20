import React, { Component } from 'react';
var ReactNative = require('react-native');
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
      textAlign: 'center',
      color:'#334d4d'
    },
    mainContainer: {
      flex: 1,
      padding: 10,
      flexDirection: 'column',
      backgroundColor: '#00cecb'
    },
    buttonText: {
      fontSize: 18,
      color: '#ff5e5b',
      alignSelf: 'center',
      fontWeight: 'bold'
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
  stickyHeader: {
    backgroundColor: '#00cecb',
    position: 'relative',
    top: 91
  },
  listContainer: {
    backgroundColor: '#00cecb',
    position: 'relative',
    top: 100
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
   concert: navigation.state.params.concertData,
   artist: navigation.state.params.concertData
 });
 constructor(props){
   super(props);



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
     return true;
   })
   .catch ((err) => {

      isLoading: false
    })
 }

  render() {


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
                   return <View key={i*10 + index}/>
               } else {
                 if (item === 'ticketUrl') {
                   let currentURL = concertInfo[i][item]
                   return (
                     <View key={i*10 + index} style={styles.mainContainer}>
                         <View>
                         <TouchableHighlight style={styles.button}
                            onPress={() => Linking.openURL(currentURL)} underlayColor="white">
                            <Text style={styles.buttonText}>Buy Tickets</Text>
                          </TouchableHighlight>
                      </View>
                    </View>
                  )
                } else {
                   return (
                       <View key={index} style={styles.mainContainer}>
                           <View>
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
           list.push(<View key={100*i} style={{ borderBottomColor: 'black', borderBottomWidth: 1}}></View>)
         }
    return (
        <ScrollView style={styles.mainContainer}>
          <View style={styles.stickyHeader}>
          <Player url={this.state.preview} />
          </View>
          <View style={styles.listContainer}>
            {list}
          </View>
        </ScrollView>
    )
  }
};

module.exports = Concerts;
