// This test suite will work without a network connection.
//
// While the example is a bit contrived, I hope it illustrates the point. With
// a simple closure, you can approximate the behavior of a dependency while
// focxusing on testing *your* code, rather than the behavior of the
// dependency.

const Test = require('./http').Test

const AxiosMock = {
  create: () => ({
    post: jest.fn((_, payload) => {
      const response = {
        data: {
          data: payload
        }
      }

      return Promise.resolve(response)
    })
  })
}

const client = Test._ClientMakerP(AxiosMock)('https://postman-echo.com')

test('can POST', () => {
  return client.post('/post', { foo: 'bar' })
    .then(response => {
      expect(response.data.data).toEqual({ foo: 'bar' })
    })
})
