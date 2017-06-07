var jamapi = {
  getMusic (location) {
    var url = 'http://api.jambase.com/events?zipCode=80202&api_key=mnzs2h3am23p7gaqkfh46q5a'
    return fetch(url).then(res => res.json())
  }
}
module.exports = jamapi
