var jamapi = {
  getMusic(location){
    var url = 'http://api.jambase.com/events?zipCode=80202&api_key=mnzs2h3am23p7gaqkfh46q5a'
    // var url = `https://api.github.com/users/mihshhehl`

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    return fetch(url, myHeaders).then((res)  =>{
      console.log(res)
     res.json()
   })
  }
}
module.exports = jamapi;
