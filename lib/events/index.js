"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MixspaEvents = /*#__PURE__*/function () {
  function MixspaEvents() {
    _classCallCheck(this, MixspaEvents);
  }

  _createClass(MixspaEvents, null, [{
    key: "on",
    value: function on(type, callback) {
      var listener = {
        handleEvent: function handleEvent(e) {
          return callback(e.detail);
        }
      };
      window.addEventListener(type, listener);
      return listener;
    }
  }, {
    key: "emit",
    value: function emit(type, message) {
      window.dispatchEvent(new CustomEvent(type, {
        detail: message
      }));
    }
  }, {
    key: "off",
    value: function off(type, listener) {
      window.removeEventListener(type, listener);
    }
  }]);

  return MixspaEvents;
}();

var _default = MixspaEvents;
exports["default"] = _default;