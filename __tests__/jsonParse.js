import Immutable from 'immutable';

describe('JSON.parse', () => {
  const original = { foo: 'bar' };
  const stringified = JSON.stringify(original);
  const parsed = JSON.parse(stringified);

  it('has Object constructor for original', () => {
    expect(original.constructor).toEqual(Object);
  });

  it('has non-Object constructor for parsed', () => {
    expect(parsed.constructor).toEqual(Object);
  });

  it('therefore doesn\'t work with Immutable.fromJS', () => {
    expect(Immutable.fromJS(original)).toEqual(Immutable.fromJS(parsed));
  });
});
