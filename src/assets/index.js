import Asset from './Asset';
import DomUtils from './util/DomUtils';

class MixspaAssets {
  static createAsset(url) {
    if (url.endsWith('.css')) {
      return new Asset(url, DomUtils.createStyle(url));
    } else if (url.endsWith('.js')) {
      return new Asset(url, DomUtils.createScript(url));
    }
  }
}

export default MixspaAssets;
