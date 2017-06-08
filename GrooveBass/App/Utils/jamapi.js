
var jamapi = {
  getMusic (location, radius) {
    var JamBaseData = []
    var startDate = new Date()
    var dd = startDate.getDate()
    var mm = startDate.getMonth() + 1 // January is 0!

    var yyyy = startDate.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    var startDate = yyyy + '-' + mm + '-' + dd
    var endDate = '2017-06-14'

    var url = `http://api.jambase.com/events?zipCode=${location}&radius=${radius}&startDate=${startDate}T20%3A00%3A00&endDate=${endDate}T20%3A00%3A00&page=0&api_key=7eesw3absujvzhjypp8gphdr`

    console.log(url)
    return fetch(url).then(res => res.json())
    .then((jsonRes) => {
      for (var i = 0; i < (jsonRes.Events).length; i++) {
        JamBaseData.push({artistName: jsonRes.Events[i].Artists, date: jsonRes.Events[i].Date, ticketUrl: jsonRes.Events[i].TicketUrl, venueName: jsonRes.Events[i].Venue.Name, address: jsonRes.Events[i].Venue.Address, city: jsonRes.Events[i].Venue.City, state: jsonRes.Events[i].Venue.StateCode, zipcode: jsonRes.Events[i].Venue.ZipCode})
      }
      console.log(JamBaseData)
      return JamBaseData
    })
  }
}
module.exports = jamapi
