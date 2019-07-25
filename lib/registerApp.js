"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Context = _interopRequireDefault(require("./utils/Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var registerApp = function registerApp(appInfo) {
  _Context["default"].addAppInfo(appInfo.id, appInfo);
};

var _default = registerApp;
exports["default"] = _default;