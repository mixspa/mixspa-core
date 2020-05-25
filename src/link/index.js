import MixspaEvents from '../events';

class MixspaLink {
  static onLink(handler) {
    return MixspaEvents.on('mixspa:url:changed', handler);
  }

  static offLink(listener) {
    MixspaEvents.off('mixspa:url:changed', listener);
  }

  static emitLink(url) {
    MixspaEvents.emit('mixspa:url:changed', url);
  }
}

export default MixspaLink;
