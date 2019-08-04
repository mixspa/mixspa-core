"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Context = _interopRequireDefault(require("./Context"));

var _DomUtils = _interopRequireDefault(require("./DomUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadResource = function loadResource(url) {
  return _DomUtils["default"].loadResource(url).then(function () {
    return _Context["default"].addLoadedUrl(url) || url;
  });
};

var _default = loadResource;
exports["default"] = _default;