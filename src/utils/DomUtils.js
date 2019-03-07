class DomUtils {
  static loadResource(url) {
    let element = url.endsWith('.js') ? DomUtils.createScript(url) : DomUtils.createStyle(url);
    return DomUtils.loadElement(element);
  }

  static loadElement(element) {
    return new Promise((resolve, reject) => {
      element.onload = resolve;
      element.onerror = reject;
      document.body.appendChild(element);
    });
  }

  static createScript(src) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'UTF-8'
    script.src = src;
    return script;
  }

  static createStyle(href) {
    let style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = href;
    return style;
  }
}

export default DomUtils;
