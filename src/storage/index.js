import DefaultEngine from './engines/DefaultEngine';

class MixspaStorage {
  static engine = DefaultEngine;

  static use(value) {
    MixspaStorage.engine = value;
  }

  static put(key, value) {
    MixspaStorage.engine.set(key, value);
  }

  static get(key) {
    return MixspaStorage.engine.get(key);
  }

  static has(key) {
    return !!MixspaStorage.engine.get(key);
  }

  static remove(key) {
    return MixspaStorage.engine.remove(key);
  }

  static clear() {
    MixspaStorage.engine.clear();
  }
}

export default MixspaStorage;
