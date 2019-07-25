"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.__mixspa__context_apps = window.__mixspa__context_apps || {};
window.__mixspa__context_urls = window.__mixspa__context_urls || [];

var Context =
/*#__PURE__*/
function () {
  function Context() {
    _classCallCheck(this, Context);
  }

  _createClass(Context, null, [{
    key: "addAppInfo",
    value: function addAppInfo(appId, appInfo) {
      window.__mixspa__context_apps[appId] = appInfo;
    }
  }, {
    key: "getAppInfo",
    value: function getAppInfo(appId) {
      return window.__mixspa__context_apps[appId];
    }
  }, {
    key: "hasAppInfo",
    value: function hasAppInfo(appId) {
      return window.__mixspa__context_apps.hasOwnProperty(appId);
    }
  }, {
    key: "withoutLoaded",
    value: function withoutLoaded(url) {
      return !window.__mixspa__context_urls.includes(url);
    }
  }, {
    key: "addLoadedUrl",
    value: function addLoadedUrl(url) {
      window.__mixspa__context_urls.push(url);
    }
  }]);

  return Context;
}();

var _default = Context;
exports["default"] = _default;