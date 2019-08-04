"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Context = _interopRequireDefault(require("./utils/Context"));

var _loadResource = _interopRequireDefault(require("./utils/loadResource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadSimpleApp = function loadSimpleApp(appUrl) {
  if (_Context["default"].withoutLoaded(appUrl)) {
    return (0, _loadResource["default"])(appUrl);
  } else {
    return Promise.resolve(appUrl);
  }
};

var _default = loadSimpleApp;
exports["default"] = _default;