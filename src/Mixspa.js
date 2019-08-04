import loadApp from './loadApp';
import defineApp from './defineApp';
import registerApp from './registerApp';
import loadSimpleApp from './loadSimpleApp';
import getAttributes from './getAttributes';
import MixspaEvent from '@mixspa/events';
import { onLink, offLink, emitLink } from './linkEvent';

const Mixspa = {
  on: MixspaEvent.on,
  emit: MixspaEvent.emit,
  onLink: onLink,
  offLink: offLink,
  emitLink: emitLink,
  load: loadApp,
  define: defineApp,
  register: registerApp,
  loadSimple: loadSimpleApp,
  getAttributes: getAttributes
};

export default Mixspa;
