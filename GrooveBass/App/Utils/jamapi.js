var jamapi = {
  getMusic (location, radius, startDate, endDate) {
    var url = `http://api.jambase.com/events?zipCode=${location}&radius=${radius}&startDate=${startDate}&endDate=${endDate}&page=0&api_key=5x8rskju2fnj5txzc453g282`
    console.log(url)
    return fetch(url).then(res => res.json())
  }
}
module.exports = jamapi
