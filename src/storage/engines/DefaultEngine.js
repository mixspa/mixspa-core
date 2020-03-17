window.__mixspa__storage = window.__mixspa__storage || { };

class DefaultEngine {
  static set(key, value) {
    window.__mixspa__storage[key] = value;
  }

  static get(key) {
    return window.__mixspa__storage[key];
  }

  static remove(key) {
    delete window.__mixspa__storage[key];
  }

  static clear() {
    window.__mixspa__storage = {};
  }
}

export default DefaultEngine;
