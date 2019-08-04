import MixspaEvent from '@mixspa/events';

export const onLink = (handler) => {
  return MixspaEvent.on('mixspa:url:changed', handler);
};

export const offLink = (handler) => {
  MixspaEvent.off('mixspa:url:changed', handler);
};

export const emitLink = (url) => {
  MixspaEvent.emit('mixspa:url:changed', url);
};
