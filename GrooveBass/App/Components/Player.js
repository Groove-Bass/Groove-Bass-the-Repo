// var React = require('react-native');
import React, { Component } from 'react';
var ReactNative = require('react-native');
import HTMLView from 'react-native-htmlview';

// var api = require('../Utils/api');
// var Dashboard = require('./Dashboard');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicatorIOS,
  WebView
} = ReactNative;

function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == 'iframe') {
    const a = node.attribs;
    const iframeHtml = `<iframe src="${a.src}"></iframe>`;
    return (
      <View key={index} style={{width: (Number(a.width) + 17), height: Number(a.height)}}>
        <WebView source={{html: iframeHtml}} />
      </View>
    );
  }
}

class Player extends React.Component {
  static navigationOptions = ({navigation}) => ({
    // title: "BassGroovin'",
    title: navigation.state.params.location,
    artist: navigation.state.params
  });
  constructor(props){
    console.log(props, 'props');
    super(props);
    this.state = {
      artist: props.navigation.state.params,
      error: false
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    const htmlContent = `
      <div>
        <iframe src="https://embed.spotify.com/?uri=spotify:artist:2QoU3awHVdcHS8LrZEKvSM&size=detail&theme=dark" width="300" height="256" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>
        <iframe src="https://open.spotify.com/embed?uri=spotify%3Atrack%3A33Q6ldVXuJyQmqs8BmAa0k" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
      </div>
    `;
    return (
      <HTMLView value={htmlContent} renderNode={renderNode} />
      // <View>
      //   <Text>iframe playlist & concert info here</Text>
      //   <Text>{this.state.artist.items[0].name}</Text>
      // <Button
      //   title="Go to the Saved Concerts Page"
      //   onPress={() =>
      //     navigate('Concerts', {location: '80202'})
      //   }
      // />
      // <HTMLView
      //   value={htmlContent} />
      // </View>
    );
  }
}

module.exports = Player;
