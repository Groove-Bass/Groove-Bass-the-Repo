
var jamapi = {
  getMusic (location, radius) {
    var jamBaseData = []
    console.log(Date.now())
    var url = `http://api.jambase.com/events?zipCode=${location}&radius=${radius}&startDate=2017-06-08T20%3A00%3A00&endDate=2017-06-09T20%3A00%3A00&page=0&api_key=62uety22hfk9ppf6ttpxgqkw`
    console.log(url)
    return fetch(url).then(res => res.json())
    .then((jsonRes) => {
      for (var i=0; i<(jsonRes.Events).length; i++){
        for (var j=0; j<(jsonRes.Events[i].Artists).length; j++){
          jamBaseData.push({artistName: jsonRes.Events[i].Artists[j].Name, date: jsonRes.Events[i].Date, ticketUrl: jsonRes.Events[i].TicketUrl, venueName: jsonRes.Events[i].Venue.Name, address: jsonRes.Events[i].Venue.Address, city: jsonRes.Events[i].Venue.City, state: jsonRes.Events[i].Venue.StateCode, zipcode: jsonRes.Events[i].Venue.ZipCode})
        }
      }
      console.log(jamBaseData)
      return jamBaseData
    })
  }
}
module.exports = jamapi
