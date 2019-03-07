const defineApp = (options) => window.customElements.define(
  options.tag,
  class extends HTMLElement {
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
  }
);

export default defineApp;
