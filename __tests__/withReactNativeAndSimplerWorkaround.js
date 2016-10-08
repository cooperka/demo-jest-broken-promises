require('react-native');

// Thanks to @stevehollaar
// https://github.com/facebook/jest/issues/1760#issuecomment-251784048
describe('With React Native and simpler workaround', () => {
  beforeAll(() => {
    global.Promise = require.requireActual('promise');
  });

  afterAll(() => {
    global.Promise = require.requireMock('promise');
  });

  it('works again', () => {
    return Promise.resolve('')
      .then((result) => expect(result).toEqual(''));
  });

  it('doesn\'t work with timers', () => {
    const promiseWithTimeout = new Promise((resolve) => {
      setTimeout(() => { resolve(''); }, 1000);
    });

    return promiseWithTimeout
      .then((result) => expect(result).toEqual(''));
  });
});
