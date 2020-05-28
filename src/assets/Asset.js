import { INIT, LOADING, SUCCESS, ERROR } from '../consts';

class Asset {
  constructor(url, element) {
    this._url = url;
    this._status = INIT;
    this._element = element;
    this._element.onload = this._onLoad;
    this._element.onerror = this._onError;
    this._loadActions = [];
    this._errorActions = [];
  }

  load(parentEl = document.body) {
    if (this.isLoaded()) {
      return Promise.resolve(this);
    }
    return new Promise((resolve, reject) => {
      this._loadActions.push(resolve);
      this._errorActions.push(reject);
      if (this._status === INIT) {
        this._status = LOADING;
        parentEl.appendChild(this._element);
      }
    });
  }

  get url() {
    return this._url;
  }

  get status() {
    return this._status;
  }

  get element() {
    return this._element;
  }

  isLoading() {
    return this._status == LOADING;
  }

  isLoaded() {
    return this._status == SUCCESS || this.status == ERROR;
  }

  _onLoad = () => {
    this._status = SUCCESS;
    this._loadActions.forEach(a => a(this));
  }

  _onError = (msg) => {
    this._status = ERROR;
    this._errorActions.forEach(a => a({ message: msg, source: this }));
  }
}

export default Asset;
