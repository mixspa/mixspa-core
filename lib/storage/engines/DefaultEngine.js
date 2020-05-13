"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.__mixspa__storage = window.__mixspa__storage || {};

var DefaultEngine = /*#__PURE__*/function () {
  function DefaultEngine() {
    _classCallCheck(this, DefaultEngine);
  }

  _createClass(DefaultEngine, null, [{
    key: "set",
    value: function set(key, value) {
      window.__mixspa__storage[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return window.__mixspa__storage[key];
    }
  }, {
    key: "remove",
    value: function remove(key) {
      delete window.__mixspa__storage[key];
    }
  }, {
    key: "clear",
    value: function clear() {
      window.__mixspa__storage = {};
    }
  }]);

  return DefaultEngine;
}();

var _default = DefaultEngine;
exports["default"] = _default;