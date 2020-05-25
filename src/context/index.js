import App from '../app/App';
import MixspaAssets from '../assets';
import MixspaStorage from '../storage';

class MixspaContext {
  static registerApp(appInfo) {
    if (MixspaContext.hasApp(appInfo.id)) {
      MixspaContext.updateApp(appInfo);
    } else {
      MixspaStorage.put(appInfo.id, MixspaContext._createApp(appInfo));
    }
  }

  static getApp(appId) {
    return MixspaStorage.get(appId);
  }

  static hasApp(appId) {
    return MixspaStorage.has(appId);
  }

  static updateApp() {
    //TODO: update assets appInfo
  }

  static _createApp(appInfo) {
    return new App(appInfo, appInfo.assets.map(asset => MixspaContext._getOrCreateAsset(asset)));
  }

  static _getOrCreateAsset(assetInfo) {
    if (!MixspaStorage.has(assetInfo)) {
      MixspaStorage.put(assetInfo, MixspaAssets.createAsset(assetInfo));
    }
    return MixspaStorage.get(assetInfo);
  }
}

export default MixspaContext;
