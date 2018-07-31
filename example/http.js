const axios = require('axios')

exports.ClientMaker = (baseURL) => {
  const client = axios.create({
    baseURL,
    headers: { 'A-Header-That-I-Need': 'yep' }
  })

  return {
    get: endpoint => client.get(endpoint),
    post: (endpoint, payload) => client.post(endpoint, payload)
    // ...etc
  }
}

const _ClientMakerP = (axios) => (baseURL) => {
  const client = axios.create({
    baseURL,
    headers: { 'A-Header-That-I-Need': 'yep' }
  })

  return {
    get: endpoint => client.get(endpoint),
    post: (endpoint, payload) => client.post(endpoint, payload)
    // ...etc
  }
}

exports.ClientMakerP = _ClientMakerP(axios)

exports.Test = {
  _ClientMakerP
}
