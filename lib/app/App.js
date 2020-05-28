"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _consts = require("../consts");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App = /*#__PURE__*/function () {
  function App(appInfo, assets) {
    var _this = this;

    _classCallCheck(this, App);

    _defineProperty(this, "_onLoad", function () {
      _this._status = _consts.SUCCESS;

      _this._loadActions.forEach(function (a) {
        return a(_this);
      });
    });

    _defineProperty(this, "_onError", function (msg) {
      _this._status = _consts.ERROR;

      _this._errorActions.forEach(function (a) {
        return a({
          message: msg,
          source: _this
        });
      });
    });

    this._appInfo = appInfo;
    this._assets = assets;
    this._status = _consts.INIT;
    this._loadActions = [];
    this._errorActions = [];
  }

  _createClass(App, [{
    key: "load",
    value: function load() {
      var _this2 = this;

      var parentEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

      if (this.isLoaded()) {
        return Promise.resolve(this);
      }

      return new Promise(function (resolve, reject) {
        _this2._loadActions.push(resolve);

        _this2._errorActions.push(reject);

        if (_this2._status === _consts.INIT) {
          _this2._status = _consts.LOADING;

          var leftAssets = _this2._assets.filter(function (asset) {
            return !asset.isLoaded();
          });

          Promise.all(leftAssets.map(function (asset) {
            return asset.load(parentEl);
          })).then(_this2._onLoad)["catch"](_this2._onError);
        }
      });
    }
  }, {
    key: "isLoaded",
    value: function isLoaded() {
      return this._status == _consts.SUCCESS || this.status == _consts.ERROR;
    }
  }, {
    key: "id",
    get: function get() {
      return this._appInfo.id;
    }
  }, {
    key: "tag",
    get: function get() {
      return this._appInfo.tag;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    }
  }]);

  return App;
}();

var _default = App;
exports["default"] = _default;