import MixspaEvents from './index';

describe('MixspaEvents', () => {
  let listener;
  let callback;

  beforeEach(() => {
    callback = jest.fn();
    listener = MixspaEvents.on('mixspa:test:changed', callback);
  });

  it('should trigger event listener when match the event name', () => {
    MixspaEvents.emit('mixspa:test:changed', 'Hello Event');
    expect(callback).toHaveBeenCalledWith('Hello Event');
  });

  it('should do not trigger event listener when event name is different', () => {
    MixspaEvents.emit('mixspa:test:updated', 'Hello Event');
    expect(callback).not.toHaveBeenCalledWith('Hello Event');
  });

  it('should do not trigger event listener when listener has been removed', () => {
    MixspaEvents.off('mixspa:test:changed', listener);
    MixspaEvents.emit('mixspa:test:changed', 'Hello Event');
    expect(callback).not.toHaveBeenCalledWith('Hello Event');
  });
});
