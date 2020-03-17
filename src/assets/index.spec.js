import MixspaAssets from './index';

describe('MixspaAssets', () => {
  describe('create asset', () => {
    it('should create style asset el', () => {
      let url = 'http://www.test.com/test.css';
      expect(MixspaAssets.createAsset(url).url).toBe(url);
      expect(MixspaAssets.createAsset(url).element.href).toBe(url);
    });

    it('should create script asset el', () => {
      let url = 'http://www.test.com/test.js';
      expect(MixspaAssets.createAsset(url).url).toBe(url);
      expect(MixspaAssets.createAsset(url).element.src).toBe(url);
    });
  });
});
