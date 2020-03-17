import MixspaApp from './app';
import MixspaLink from './link';
import MixspaEvents from './events';
import MixspaContext from './context';

const Mixspa = {
  on: MixspaEvents.on,
  emit: MixspaEvents.emit,
  onLink: MixspaLink.onLink,
  offLink: MixspaLink.offLink,
  emitLink: MixspaLink.emitLink,
  define: MixspaApp.define,
  getApp: MixspaContext.getApp,
  register: MixspaContext.registerApp
};

export default Mixspa;
