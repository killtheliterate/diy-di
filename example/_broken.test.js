// This test suit will only work if we're connectd to internet...
//
// If a test only works because of an ambient condition, that's a good sign
// that you're relying on a side-effect. This leads to extremely flaky tests.
//
// A common way of solving test flakiness due to dependencies is to mock the
// dependency. Most JavaScript test runners have some mocking capability:
//
// - Jest mocking - https://jestjs.io/docs/en/manual-mocks
// - More Jest mocking - https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options
// - Rewire - https://github.com/jhnns/rewire
// - Proxyquire - https://github.com/thlorenz/proxyquire
// - ...etc
//
// Obviously a lot of ways to slice it... but why learn a mocking framework if
// your use-case is very simple?

const ClientMaker = require('./http').ClientMaker
const client = ClientMaker('https://postman-echo.com')

test('can Post', () => {
  return client.post('/post', { foo: 'bar' })
    .then(response => {
      expect(response.data.data).toEqual({ foo: 'bar' })
    })
})
