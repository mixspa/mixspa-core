import Context from './utils/Context';

const registerApp = (appInfo) => {
  Context.addAppInfo(appInfo.id, appInfo);
};

export default registerApp;
