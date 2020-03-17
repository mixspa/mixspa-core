import Asset from './Asset';
import { INIT, SUCCESS, ERROR } from '../consts'

describe('Asset', () => {
  let url;
  let dom;

  beforeEach(() => {
    url = 'http://www.test.com';
    dom = document.createElement('script');
  });

  describe('init', () => {
    it('should init asset', () => {
      let asset = new Asset(url, dom);
      expect(asset.url).toBe(url);
      expect(asset.status).toBe(INIT);
      expect(asset.element).toBe(dom);
    });
  });

  describe('load asset success', () => {
    beforeEach(() => {
      document.body.appendChild = jest.fn().mockImplementation(dom => dom.onload());
    });

    it('should load success', () => {
      return new Asset(url, dom).load().then((asset) => {
        expect(document.body.appendChild).toHaveBeenCalledTimes(1);
        expect(asset.status).toBe(SUCCESS);
        expect(asset.isLoaded()).toBeTruthy();
      });
    });
  });

  describe('load asset error', () => {
    beforeEach(() => {
      document.body.appendChild = jest.fn().mockImplementation(dom => dom.onerror('err'));
    });

    it('should load error', () => {
      return new Asset(url, dom).load().catch((err) => {
        expect(document.body.appendChild).toHaveBeenCalledTimes(1);
        expect(err.message).toBe('err');
        expect(err.source.status).toBe(ERROR);
        expect(err.source.isLoaded()).toBeTruthy();
      });
    });
  });
});
