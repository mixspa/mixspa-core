class MixspaEvent {
  static on(type, callback) {
    let listener = { handleEvent: (e) => callback(e.detail) };
    window.addEventListener(type, listener);
    return listener;
  }

  static emit(type, message) {
    window.dispatchEvent(new CustomEvent(type, {
      detail: message
    }));
  }

  static off(type, listener) {
    window.removeEventListener(type, listener);
  }
}

export default MixspaEvent;
