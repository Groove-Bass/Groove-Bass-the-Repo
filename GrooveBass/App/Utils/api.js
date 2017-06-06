var api = {
  getConcerts (username) {
    username = username.toLowerCase().trim()
    var url = `https://api.github.com/users/mihshhehl`
    return fetch(url).then((res) => res.json())
  }
}

module.exports = api
