import Context from './utils/Context';
import loadResource from './utils/loadResource';

const loadSimpleApp = (appUrl) => {
  if (Context.withoutLoaded(appUrl)) {
    return loadResource(appUrl);
  } else {
    return Promise.resolve(appUrl);
  }
};

export default loadSimpleApp;
