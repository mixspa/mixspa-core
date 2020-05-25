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

var Asset = /*#__PURE__*/function () {
  function Asset(url, element) {
    var _this = this;

    _classCallCheck(this, Asset);

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

    this._url = url;
    this._status = _consts.INIT;
    this._element = element;
    this._element.onload = this._onLoad;
    this._element.onerror = this._onError;
    this._loadActions = [];
    this._errorActions = [];
  }

  _createClass(Asset, [{
    key: "load",
    value: function load() {
      var _this2 = this;

      var parentEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

      if (this.isLoaded()) {
        return Promise.resolve();
      }

      return new Promise(function (resolve, reject) {
        _this2._loadActions.push(resolve);

        _this2._errorActions.push(reject);

        if (_this2._status === _consts.INIT) {
          _this2._status = _consts.LOADING;
          parentEl.appendChild(_this2._element);
        }
      });
    }
  }, {
    key: "isLoading",
    value: function isLoading() {
      return this._status == _consts.LOADING;
    }
  }, {
    key: "isLoaded",
    value: function isLoaded() {
      return this._status == _consts.SUCCESS || this.status == _consts.ERROR;
    }
  }, {
    key: "url",
    get: function get() {
      return this._url;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    }
  }]);

  return Asset;
}();

var _default = Asset;
exports["default"] = _default;