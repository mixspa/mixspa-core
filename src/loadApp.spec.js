import loadApp from './loadApp';
import Context from './utils/Context';
import DomUtils from './utils/DomUtils';

describe('loadApp', () => {
  let appTestId = 'app-id';
  let appTestInfo = {
    id: appTestId,
    tag: 'app-test',
    assets: ['http://app-test.com/app-test.js', 'http://app-test.com/app-test.css']
  };

  beforeEach(() => {
    window.__mixspa__context_apps = {};
    window.__mixspa__context_urls = [];
    Context.addAppInfo(appTestId, appTestInfo);
    DomUtils.loadResource = jest.fn().mockImplementation(url => Promise.resolve(url));
  });

  it('should load app info success', () => {
    return loadApp(appTestId).then(appInfo => {
      expect(appInfo).toEqual(appTestInfo);
    });
  });

  it('should fetch app resources', () => {
    return loadApp(appTestId).then(() => {
      expect(DomUtils.loadResource).toHaveBeenCalled();
    });
  });

  it('should do not fetch when load second time', () => {
    return loadApp(appTestId).then(() => {
      return loadApp(appTestId).then(() => {
        expect(DomUtils.loadResource).toHaveBeenCalledTimes(2);
      });
    });
  });
});
