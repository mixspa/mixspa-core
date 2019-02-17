window.customElements = {
  elements: {},
  define: function(name, elementClass) {
    this.elements[name] = elementClass;
  },
  get: function(name) {
    return this.elements[name];
  }
};
