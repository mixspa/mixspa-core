"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = _interopRequireDefault(require("../events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MixspaLink = /*#__PURE__*/function () {
  function MixspaLink() {
    _classCallCheck(this, MixspaLink);
  }

  _createClass(MixspaLink, null, [{
    key: "onLink",
    value: function onLink(handler) {
      return _events["default"].on('mixspa:url:changed', handler);
    }
  }, {
    key: "offLink",
    value: function offLink(handler) {
      _events["default"].off('mixspa:url:changed', handler);
    }
  }, {
    key: "emitLink",
    value: function emitLink(url) {
      _events["default"].emit('mixspa:url:changed', url);
    }
  }]);

  return MixspaLink;
}();

var _default = MixspaLink;
exports["default"] = _default;