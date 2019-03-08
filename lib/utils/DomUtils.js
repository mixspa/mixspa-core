"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DomUtils =
/*#__PURE__*/
function () {
  function DomUtils() {
    _classCallCheck(this, DomUtils);
  }

  _createClass(DomUtils, null, [{
    key: "loadResource",
    value: function loadResource(url) {
      var element = url.endsWith('.js') ? DomUtils.createScript(url) : DomUtils.createStyle(url);
      return DomUtils.loadElement(element);
    }
  }, {
    key: "loadElement",
    value: function loadElement(element) {
      return new Promise(function (resolve, reject) {
        element.onload = resolve;
        element.onerror = reject;
        document.body.appendChild(element);
      });
    }
  }, {
    key: "createScript",
    value: function createScript(src) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'UTF-8';
      script.src = src;
      return script;
    }
  }, {
    key: "createStyle",
    value: function createStyle(href) {
      var style = document.createElement('link');
      style.type = 'text/css';
      style.rel = 'stylesheet';
      style.href = href;
      return style;
    }
  }]);

  return DomUtils;
}();

var _default = DomUtils;
exports.default = _default;