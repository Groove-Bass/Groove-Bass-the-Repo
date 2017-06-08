var spotifyapi = {
  // TODO: write spotifybase api
  // getTrack(artists) {
  //   var
  // }

  getArtist (artists) {
    console.log('hit the spot api')
    // let artistArray = [
    //   {
    //     id: 1,
    //     name: 'Wilco'
    //   },
    //   {
    //     id: 2,
    //     name: 'Broken Social Scene'
    //   },
    //   {
    //     id: 3,
    //     name: 'Bob Dylan'
    //   }
    // ]

    console.log(artists)

    var formattedArtists = []

    // let artistSpotify = artists.map((item, index) => {
    //   let url = `https://api.spotify.com/v1/search?q=${item['Name']}&type=artist&access_token=BQD3opNL-Jr9EgRsWkfhbEfOu4N3Eed7F5Pd8R0Y3MuTrcVTPwnQ9ppEFXj-yNJzr8iYOHehQB4PUMKsiPvprqJ4a9zq2TZIlkjcq88AoVoMWgBveCmACDwBTqzj8PKxOjH4bzRK6muB3F3CXP3Puj_3`
    //   return fetch(url).then((res) => res.json())
    //   .then((jsonRes) => {
    //     console.log(jsonRes);
    //     formattedArtists.push(jsonRes.artists.items[0])
    //     // formattedArtists.push(jsonRes.artists.items[0])
    //     return formattedArtists
    //   })
    // })

    for (var i = 0; i < artists.length; i++) {
      let url = `https://api.spotify.com/v1/search?q=${artists[i]['Name']}&type=artist&access_token=BQC12V3CA8jxi7GY7EwTqnDzBetlymr_5Q71aVvDk_GYs8CnL823ik0WQZihbPhHaxDSJg00vKwqt0Ge9pdwGP72KDJUCYWWXeUSqWScnYGp32HrVF5qby4J6jim0q2S2ddBFmQEODDtCjG-yBvM2jk7`

      return fetch(url).then((res) => res.json())
      .then((jsonRes) => {
        // console.log(jsonRes);
        return jsonRes.artists.items[0]
      })
      .then((data) => {
        // console.log(data, 'data');
        let url2 = `https://api.spotify.com/v1/artists/${data.id}/top-tracks?country=SE&access_token=BQC12V3CA8jxi7GY7EwTqnDzBetlymr_5Q71aVvDk_GYs8CnL823ik0WQZihbPhHaxDSJg00vKwqt0Ge9pdwGP72KDJUCYWWXeUSqWScnYGp32HrVF5qby4J6jim0q2S2ddBFmQEODDtCjG-yBvM2jk7`

        return fetch(url2).then((res) => res.json())
        .then((jsonRes) => {
          console.log(jsonRes, 'tracks')
          return jsonRes.tracks[0]
        })
      })
    }

    // submitArtist(){
    //   sapi.getArtist()
    //   .then((res) => {
    //     console.log('hi from here.')
    //     console.log(res);
    //     // this.props.navigation.navigate('Player', {artist: res})
    //   })
    // }
  }
}

module.exports = spotifyapi
