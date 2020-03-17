import MixspaContext from './index';
import MixspaAssets from '../assets';
import MixspaStorage from '../storage';

describe('MixspaContext', () => {
  let url;
  let appInfo;

  beforeEach(() => {
    url = 'http://www.test.com/test.js';
    appInfo = { id: 'xxx', assets: [url, url] }
    MixspaStorage.clear();
    MixspaAssets.createAsset = jest.fn().mockImplementation(() => document.createElement('div'));
  });

  describe('register app', () => {
    beforeEach(() => {
      MixspaContext.registerApp(appInfo);
    });

    it('should create new app when without app in context', () => {
      expect(MixspaContext.getApp(appInfo.id)).toBeDefined();
    });

    it('should create asset when create app', () => {
      expect(MixspaStorage.get(url)).toBeDefined();
      expect(MixspaAssets.createAsset).toHaveBeenCalledWith(url);
    });

    it('should do not create asset when second times', () => {
      expect(MixspaAssets.createAsset).toHaveBeenCalledTimes(1);
    });
  });
});
