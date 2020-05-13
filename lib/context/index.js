"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _App = _interopRequireDefault(require("../app/App"));

var _assets = _interopRequireDefault(require("../assets"));

var _storage = _interopRequireDefault(require("../storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MixspaContext = /*#__PURE__*/function () {
  function MixspaContext() {
    _classCallCheck(this, MixspaContext);
  }

  _createClass(MixspaContext, null, [{
    key: "registerApp",
    value: function registerApp(appInfo) {
      if (MixspaContext.hasApp(appInfo.id)) {
        MixspaContext.updateApp(appInfo);
      } else {
        _storage["default"].put(appInfo.id, MixspaContext.createApp(appInfo));
      }
    }
  }, {
    key: "getApp",
    value: function getApp(appId) {
      return _storage["default"].get(appId);
    }
  }, {
    key: "hasApp",
    value: function hasApp(appId) {
      return _storage["default"].has(appId);
    }
  }, {
    key: "updateApp",
    value: function updateApp() {//TODO: update assets appInfo
    }
  }, {
    key: "createApp",
    value: function createApp(appInfo) {
      return new _App["default"](appInfo, appInfo.assets.map(function (asset) {
        return MixspaContext.getOrCreateAsset(asset);
      }));
    }
  }, {
    key: "getOrCreateAsset",
    value: function getOrCreateAsset(assetInfo) {
      if (!_storage["default"].has(assetInfo)) {
        _storage["default"].put(assetInfo, _assets["default"].createAsset(assetInfo));
      }

      return _storage["default"].get(assetInfo);
    }
  }]);

  return MixspaContext;
}();

var _default = MixspaContext;
exports["default"] = _default;