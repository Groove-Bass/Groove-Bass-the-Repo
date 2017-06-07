var sapi = {
  // TODO: write spotifybase api
  getArtist(artist) {
    console.log(artist);
    // let url2 = "https://api.spotify.com/v1/browse/new-releases?access_token=BQD1RUlG3uvpukIhKPf8qFGQ84G8kJrEPEwH47SjvhmCgyn4x60RIgmbddXTvIn3UY9tsRNgfAK2d-XeTGi8B_t4kSFBTWxiTeOKEiBBD15HP-kcteXazn4i0kaZmT8GyigCHE5e_jeBFH3jT1F5bSnG"
    let url = "https://api.spotify.com/v1/artists/2QoU3awHVdcHS8LrZEKvSM/top-tracks?country=US&access_token=BQCAb0VTbLTLy7Ij4IHf0rTMooKAS677_kXZaBFKFYu8Clt4CaFDbDeECdrV4t1WzUdpstvMCZgH5I23N7mDx3sZLS4jV4AmiSJohUkgTUxRiavt9-Q8JCyR2skrTlmAMmuhlGY14q95-oJMyOt8GE6o"
    return fetch(url).then((res) => res.json())
  }
}

module.exports = sapi
