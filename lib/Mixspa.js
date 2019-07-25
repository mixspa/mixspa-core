"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _loadApp = _interopRequireDefault(require("./loadApp"));

var _defineApp = _interopRequireDefault(require("./defineApp"));

var _registerApp = _interopRequireDefault(require("./registerApp"));

var _loadSimpleApp = _interopRequireDefault(require("./loadSimpleApp"));

var _getAttributes = _interopRequireDefault(require("./getAttributes"));

var _events = _interopRequireDefault(require("@mixspa/events"));

var _linkEvent = require("./linkEvent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Mixspa = {
  on: _events["default"].on,
  emit: _events["default"].emit,
  onLink: _linkEvent.onLink,
  emitLink: _linkEvent.emitLink,
  load: _loadApp["default"],
  define: _defineApp["default"],
  register: _registerApp["default"],
  loadSimple: _loadSimpleApp["default"],
  getAttributes: _getAttributes["default"]
};
var _default = Mixspa;
exports["default"] = _default;