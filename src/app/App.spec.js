import App from './App';
import Asset from '../assets/Asset';
import { INIT, SUCCESS, ERROR } from '../consts'

describe('App', () => {
  let appInfo = { id: 'test-app', tag: 'test-tag' };

  describe('init', () => {
    it('should set init status in init', () => {
      let app = new App(appInfo, []);
      expect(app.id).toBe(appInfo.id);
      expect(app.tag).toBe(appInfo.tag);
      expect(app.status).toBe(INIT);
    });
  });

  describe('load success with empty', () => {
    it('should load success when without assets', () => {
      return new App(appInfo, []).load().then((app) => {
        expect(app.status).toBe(SUCCESS);
      });
    });
  });

  describe('load success for assets', () => {
    let asset;

    beforeEach(() => {
      asset = new Asset('url', document.createElement('div'));
      asset.load = jest.fn().mockImplementation(() => Promise.resolve(asset));
    });

    it('should load success with asset', () => {
      return new App(appInfo, [asset]).load().then((app) => {
        expect(app.status).toBe(SUCCESS);
        expect(asset.load).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('load error for assets', () => {
    let asset;

    beforeEach(() => {
      asset = new Asset('url', document.createElement('div'));
      asset.load = jest.fn().mockImplementation(() => Promise.reject('err'));
    });

    it('should load failure with asset', () => {
      return new App(appInfo, [asset]).load().catch((err) => {
        expect(err.message).toBe('err');
        expect(err.source.status).toBe(ERROR);
        expect(asset.load).toHaveBeenCalledTimes(1);
      });
    });
  });
});
