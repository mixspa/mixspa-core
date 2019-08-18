import MixspaEvent from '../event';

class MixspaLink {
  static onLink(handler) {
    return MixspaEvent.on('mixspa:url:changed', handler);
  }

  static offLink(handler) {
    MixspaEvent.off('mixspa:url:changed', handler);
  }

  static emitLink(url) {
    MixspaEvent.emit('mixspa:url:changed', url);
  }
}

export default MixspaLink;
