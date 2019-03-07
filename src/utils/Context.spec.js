import Context from './Context';

describe('Context', () => {
  describe('appInfo', () => {
    let appInfo = {
      id: 'test',
      tag: 'test'
    };
    beforeEach(() => {
      window.__mixspa__context_apps = {};
      Context.addAppInfo('test', appInfo);
    });

    it('should have appInfo into global', () => {
      expect(Context.hasAppInfo('test')).toBeTruthy();
    });

    it('should save appInfo into global', () => {
      expect(Context.getAppInfo('test')).toEqual(appInfo);
    });
  });

  describe('url', () => {
    let url = 'http://test.com/test.js';

    it('should without loaded url into global', () => {
      expect(Context.withoutLoaded(url)).toBeTruthy();
    });

    it('should include url into global', () => {
      Context.addLoadedUrl(url);
      expect(Context.withoutLoaded(url)).toBeFalsy();
    });
  });
});
