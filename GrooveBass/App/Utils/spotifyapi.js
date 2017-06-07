var spotifyapi = {
  // TODO: write spotifybase api
  getArtist() {
    let artistArray = [
      {
        id: 1,
        name: 'Wilco'
      },
      {
        id: 2,
        name: 'Broken Social Scene'
      },
      {
        id: 3,
        name: 'Bob Dylan'
      }
    ]

    var formattedArtists = []

    let artistSpotify = artistArray.map((item, index) => {
      let url = `https://api.spotify.com/v1/search?q=${item['name']}&type=artist&access_token=BQBswT6eousYphchAU450SafZFkJGO4-voh4Jx4y_tmKx5qNXAMMuiGVDAuks7fcP-5JoE0G3-amR4FAIAtnkEGX33Hk6oXUYtTezTP7FK8lXyD2hVwkA-nw_HQ9YRodCbHJAu_Jag_y9q_svmSiN0j7`
      return fetch(url).then((jsonRes) => jsonRes)
      // .then((jsonRes) => {
      //   formattedArtists.push(jsonRes.artists.items[0])
        // return formattedArtists
      // })
    })
    console.log(formattedArtists);
    return formattedArtists
    console.log('function ran');
    // console.log(formattedArtists);
    // return formattedArtists

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
