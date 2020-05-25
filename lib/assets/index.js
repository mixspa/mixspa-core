"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Asset = _interopRequireDefault(require("./Asset"));

var _DomUtils = _interopRequireDefault(require("./util/DomUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MixspaAssets = /*#__PURE__*/function () {
  function MixspaAssets() {
    _classCallCheck(this, MixspaAssets);
  }

  _createClass(MixspaAssets, null, [{
    key: "createAsset",
    value: function createAsset(url) {
      if (url.endsWith('.css')) {
        return new _Asset["default"](url, _DomUtils["default"].createStyle(url));
      } else if (url.endsWith('.js')) {
        return new _Asset["default"](url, _DomUtils["default"].createScript(url));
      }
    }
  }]);

  return MixspaAssets;
}();

var _default = MixspaAssets;
exports["default"] = _default;