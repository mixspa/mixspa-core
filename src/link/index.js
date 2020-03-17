import MixspaEvents from '../events';

class MixspaLink {
  static onLink(handler) {
    return MixspaEvents.on('mixspa:url:changed', handler);
  }

  static offLink(handler) {
    MixspaEvents.off('mixspa:url:changed', handler);
  }

  static emitLink(url) {
    MixspaEvents.emit('mixspa:url:changed', url);
  }
}

export default MixspaLink;
