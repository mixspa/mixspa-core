import MixspaEvent from '@mixspa/events';

export const onLink = (handler) => {
  MixspaEvent.on('mixspa:url:changed', handler);
};

export const emitLink = (url) => {
  MixspaEvent.emit('mixspa:url:changed', url);
};
