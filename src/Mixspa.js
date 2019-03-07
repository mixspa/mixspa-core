import loadApp from './loadApp';
import defineApp from './defineApp';
import registerApp from './registerApp';
import loadSimpleApp from './loadSimpleApp';
import getAttributes from './getAttributes';
import MixspaEvent from '@mixspa/events';

const Mixspa = {
  on: MixspaEvent.on,
  emit: MixspaEvent.emit,
  define: defineApp,
  register: registerApp,
  load: loadApp,
  loadSimple: loadSimpleApp,
  getAttributes: getAttributes
};

export default Mixspa;
