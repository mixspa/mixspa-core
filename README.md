# mixspa-core
mixspa-core is core for mixspa.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/@mixspa/core.svg)](https://npmjs.org/package/@mixspa/core)
[![NPM Downloads](https://img.shields.io/npm/dm/@mixspa/core.svg)](https://npmjs.org/package/@mixspa/core)
[![Build Status](https://circleci.com/gh/mixspa/mixspa-core.svg?style=svg)](https://circleci.com/gh/mixspa/mixspa-core)

[![NPM](https://nodei.co/npm/@mixspa/core.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@mixspa/core/)

## How to use?

### Define app for Mixspa

According the following to define a app. The `name` & `render` must exist.

```js
import Mixspa from '@mixspa/core';

Mixspa.define({
  tag: 'app-demo', /* This name will be used for tag name */
  init: function(element) {
    /* will be call when custom element has been created */
  },
  render: function(element) {
    let attrName = element.getAttribute('data-name'); //
    /* will be call after custom element has been rendered */
  },
  unmount: function(element) {
    /* will be call when custom element has been removed */
  },
  update: function(element) {
    /* will be call when attribute has been changed */
  }
});
```

The Mixspa will create a custom element for use.
About more details & the api of parameter `element` please reference here:
[CustomElement](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry)

### Event for Mixspa

```js
import Mixspa from '@mixspa/core'
/*
Mixspa.on('[module]:[action]', listener);
*/
Mixspa.on('test:update', (message) => {
  console.log(message);
});

/*
Mixspa.emit('[module]:[action]', message);
*/
Mixspa.emit('test:update', 'Hello Test');
```

### Load app for Mixspa

Add app info looks like this:
```js
import Mixspa from '@mixspa/core'

Mixspa.add({
  tag: 'app-demo',
  name: 'AppDemo',
  assets: ['https://www.app-demo.com/app.js', 'https://www.app-demo.com/app.css']
});

Mixspa.load('AppDemo').then(appInfo => {
  let el = document.createElement(appInfo.tag);
  el.attributeOne = 'attribute one';
  document.getElementById('app-container').appendChild(el);
});

// Load simple app.
Mixspa.loadSimple('https://www.app-simple-demo.com/app.js').then(() => {
  let el = document.createElement('app-simple-demo');
  el.attributeOne = 'attribute one';
  document.getElementById('app-container').appendChild(el);
});
```

NOTE: For simple app, you should provide the `tag name`.

## License

mixspa-app is released under the [MIT license](https://github.com/mixspa/mixspa-core/blob/master/LICENSE).
