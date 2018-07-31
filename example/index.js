const ClientMaker = require('./http').ClientMaker
const ClientMakerP = require('./http').ClientMakerP

const client = ClientMaker('https://postman-echo.com')

client.get('/get?foo=bar')
  .then(({ data }) => console.log('GET', data))

client.post('/post', {foo: 'bar'})
  .then(({ data }) => console.log('POST', data))

const clientP = ClientMakerP('https://postman-echo.com')

clientP.get('/get?foo=bar')
  .then(({ data }) => console.log('GET', data))

clientP.post('/post', {foo: 'bar'})
  .then(({ data }) => console.log('POST', data))
