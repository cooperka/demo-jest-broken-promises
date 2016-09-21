const originalPromise = global.Promise;
const originalSetTimeout = global.setTimeout;

// Promises break after importing react-native,
// but the original version is restored below.
require('react-native');

global.Promise = originalPromise;
global.setTimeout = originalSetTimeout;

describe('With React Native and workaround', () => {
  it('works again', () => {
    return Promise.resolve('')
      .then((result) => expect(result).toEqual(''));
  });

  it('also works with timers', () => {
    const promiseWithTimeout = new Promise((resolve) => {
      setTimeout(() => { resolve(''); }, 1000);
    });

    return promiseWithTimeout
      .then((result) => expect(result).toEqual(''));
  });
});
