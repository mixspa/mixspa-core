import MixspaApp from '@mixspa/app';
import MixspaEvent from '@mixspa/events';
import MixspaLoader from '@mixspa/loader';
import getAttributes from './getAttributes';

const Mixspa = {
  on: MixspaEvent.on,
  emit: MixspaEvent.emit,
  define: MixspaApp.define,
  add: MixspaLoader.addAppInfo,
  load: MixspaLoader.loadApp,
  loadSimple: MixspaLoader.loadSimpleApp,
  getAttributes: getAttributes
};

export default Mixspa;
