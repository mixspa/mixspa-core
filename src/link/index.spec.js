import MixspaLink from './index';

describe('MixspaLink', () => {
  let listener;
  let callback;

  beforeEach(() => {
    callback = jest.fn();
    listener = MixspaLink.onLink(callback);
  });

  it('should trigger link listener', () => {
    MixspaLink.emitLink('Hello Event');
    expect(callback).toHaveBeenCalledWith('Hello Event');
  });

  it('should do not trigger link listener when listener has been removed', () => {
    MixspaLink.offLink(listener);
    MixspaLink.emitLink('Hello Event');
    expect(callback).not.toHaveBeenCalledWith('Hello Event');
  });
});
