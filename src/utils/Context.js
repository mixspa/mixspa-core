window.__mixspa__context_apps = window.__mixspa__context_apps || {};
window.__mixspa__context_urls = window.__mixspa__context_urls || [];

class Context {
  static addAppInfo(appId, appInfo) {
    window.__mixspa__context_apps[appId] = appInfo;
  }

  static getAppInfo(appId) {
    return window.__mixspa__context_apps[appId];
  }

  static hasAppInfo(appId) {
    return window.__mixspa__context_apps.hasOwnProperty(appId);
  }

  static withoutLoaded(url) {
    return !window.__mixspa__context_urls.includes(url);
  }

  static addLoadedUrl(url) {
    window.__mixspa__context_urls.push(url);
  }
}

export default Context;
