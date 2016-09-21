describe('Without React Native', () => {
  it('works with promises', () => {
    return Promise.resolve('')
      .then((result) => expect(result).toEqual(''));
  });
});
