import Context from './Context';
import DomUtils from './DomUtils';
import loadResource from './loadResource';

describe('loadResource', () => {
  beforeEach(() => {
    Context.addLoadedUrl = jest.fn();
    DomUtils.loadResource = jest.fn().mockImplementation(url => Promise.resolve(url));
  });

  it('should load resource success', () => {
    let url = 'http://www.test.com/test.js';
    return loadResource(url).then(resultUrl => {
      expect(resultUrl).toEqual(url);
    });
  });

  it('should load resource by DomUtils', () => {
    let url = 'http://www.test.com/test.js';
    return loadResource(url).then(() => {
      expect(DomUtils.loadResource).toHaveBeenCalledWith(url);
    });
  });

  it('should add url after loaded', () => {
    let url = 'http://www.test.com/test.js';
    return loadResource(url).then(() => {
      expect(Context.addLoadedUrl).toHaveBeenCalledWith(url);
    });
  });
});
