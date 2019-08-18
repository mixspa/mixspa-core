class MixspaApp {
  static define(options) {
    window.customElements.define(options.tag, class extends HTMLElement {
      constructor() {
        super();
        options.init && options.init(this);
      }

      connectedCallback() {
        options.render && options.render(this);
      }

      disconnectedCallback() {
        options.unmount && options.unmount(this);
      }

      attributeChangedCallback() {
        options.update && options.update(this);
      }
    });
  }

  static getAttributes(element) {
    let names = element.getAttributeNames();
    return names.reduce((obj, n) => { obj[n] = element.getAttribute(n); return obj; }, {});
  }
}

export default MixspaApp;
