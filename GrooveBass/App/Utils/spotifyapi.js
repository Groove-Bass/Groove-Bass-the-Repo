var spotifyapi = {

  getArtist (artists) {
    var formattedArtists = []

    for (var i = 0; i < artists.length; i++) {
      let url = `https://api.spotify.com/v1/search?q=${artists[i]['Name']}&type=artist&access_token=BQA52qh0aTrZn4u9GGeWmsDlteIZKOojFWtKRl0OE6iJszlPVmcVyxvQOyORkTT8zbJFsqg1hGc_PbRKAvngDM1jH_L79yB6yeDTHKaRNmHd3VFPqqoPEUpeyVUiNovfEQQHf-8V4Bcbuo6Do2cIBvTq`

      return fetch(url).then((res) => res.json())
      .then((jsonRes) => {
        return jsonRes.artists.items[0]
      })
      .then((data) => {
        let url2 = `https://api.spotify.com/v1/artists/${data.id}/top-tracks?country=SE&access_token=BQA52qh0aTrZn4u9GGeWmsDlteIZKOojFWtKRl0OE6iJszlPVmcVyxvQOyORkTT8zbJFsqg1hGc_PbRKAvngDM1jH_L79yB6yeDTHKaRNmHd3VFPqqoPEUpeyVUiNovfEQQHf-8V4Bcbuo6Do2cIBvTq`
        return fetch(url2).then((res) => res.json())
        .then((jsonRes) => {

          return jsonRes.tracks[0]
        })
      })
    }
  }
}

module.exports = spotifyapi
