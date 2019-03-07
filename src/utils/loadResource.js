import Context from './Context';
import DomUtils from './DomUtils';

const loadResource = (url) => DomUtils.loadResource(url).then(() => Context.addLoadedUrl(url) || url);

export default loadResource;
