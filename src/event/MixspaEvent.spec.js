import MixspaEvent from './MixspaEvent';

describe('MixspaEvent', () => {
  let listener;
  let callback;

  beforeEach(() => {
    callback = jest.fn();
    listener = MixspaEvent.on('mixspa:test:changed', callback);
  });

  it('should trigger event listener when match the event name', () => {
    MixspaEvent.emit('mixspa:test:changed', 'Hello Event');
    expect(callback).toHaveBeenCalledWith('Hello Event');
  });

  it('should do not trigger event listener when event name is different', () => {
    MixspaEvent.emit('mixspa:test:updated', 'Hello Event');
    expect(callback).not.toHaveBeenCalledWith('Hello Event');
  });

  it('should do not trigger event listener when listener has been removed', () => {
    MixspaEvent.off('mixspa:test:changed', listener);
    MixspaEvent.emit('mixspa:test:changed', 'Hello Event');
    expect(callback).not.toHaveBeenCalledWith('Hello Event');
  });
});
