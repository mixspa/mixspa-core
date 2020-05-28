import { INIT, LOADING, SUCCESS, ERROR } from '../consts';

class App {
  constructor(appInfo, assets) {
    this._appInfo = appInfo;
    this._assets = assets;
    this._status = INIT;
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
        let leftAssets = this._assets.filter(asset => !asset.isLoaded());
        Promise.all(leftAssets.map(asset => asset.load(parentEl))).then(this._onLoad).catch(this._onError);
      }
    });
  }

  get id() {
    return this._appInfo.id;
  }

  get tag() {
    return this._appInfo.tag;
  }

  get status() {
    return this._status;
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

export default App;
