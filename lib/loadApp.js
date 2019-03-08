"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Context = _interopRequireDefault(require("./utils/Context"));

var _loadResource = _interopRequireDefault(require("./utils/loadResource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadAssets(assets) {
  var leftAssets = assets.filter(function (asset) {
    return _Context.default.withoutLoaded(asset);
  });
  return Promise.all(leftAssets.map(function (asset) {
    return (0, _loadResource.default)(asset);
  }));
}

var loadApp = function loadApp(appId) {
  if (_Context.default.hasAppInfo(appId)) {
    var appInfo = _Context.default.getAppInfo(appId);

    return loadAssets(appInfo.assets).then(function () {
      return appInfo;
    });
  } else {
    return Promise.reject('app can not be found');
  }
};

var _default = loadApp;
exports.default = _default;