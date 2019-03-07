import Context from './utils/Context';
import loadResource from './utils/loadResource';

function loadAssets(assets) {
  let leftAssets = assets.filter(asset => Context.withoutLoaded(asset));
  return Promise.all(leftAssets.map(asset => loadResource(asset)));
}

const loadApp = (appId) => {
  if (Context.hasAppInfo(appId)) {
    let appInfo = Context.getAppInfo(appId);
    return loadAssets(appInfo.assets).then(() => appInfo);
  } else {
    return Promise.reject('app can not be found');
  }
};

export default loadApp;
