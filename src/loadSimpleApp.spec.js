import DomUtils from './utils/DomUtils';
import loadSimpleApp from './loadSimpleApp';

describe('loadSimpleApp', () => {
  let appUrl = 'http://app-simple.com/app-simple.js';

  beforeEach(() => {
    window.__mixspa__context_apps = {};
    window.__mixspa__context_urls = [];
    DomUtils.loadResource = jest.fn().mockImplementation(url => Promise.resolve(url));
  });

  it('should load app success', () => {
    return loadSimpleApp(appUrl).then(url => {
      expect(url).toBe(appUrl);
    });
  });

  it('should fetch app resource', () => {
    return loadSimpleApp(appUrl).then(() => {
      expect(DomUtils.loadResource).toHaveBeenCalled();
    });
  });

  it('should do not fetch app resource when load second time', () => {
    return loadSimpleApp(appUrl).then(() => {
      return loadSimpleApp(appUrl).then(() => {
        expect(DomUtils.loadResource).toHaveBeenCalledTimes(1);
      });
    });
  });
});
