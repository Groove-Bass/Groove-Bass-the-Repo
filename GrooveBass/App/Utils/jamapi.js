var jamapi = {
  getMusic(location){
    var url = 'http://api.jambase.com/events?zipCode=80202&api_key=mnzs2h3am23p7gaqkfh46q5a'
    // var url = `https://api.github.com/users/mihshhehl`
    return fetch(url).then((res) => res.json())
  }
}
module.exports = jamapi;
