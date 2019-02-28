"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _app = _interopRequireDefault(require("@mixspa/app"));

var _events = _interopRequireDefault(require("@mixspa/events"));

var _loader = _interopRequireDefault(require("@mixspa/loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mixspa = {
  on: _events.default.on,
  emit: _events.default.emit,
  define: _app.default.define,
  add: _loader.default.addAppInfo,
  load: _loader.default.loadApp,
  loadSimple: _loader.default.loadSimpleApp
};
var _default = Mixspa;
exports.default = _default;