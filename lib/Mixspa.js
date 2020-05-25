"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./app"));

var _link = _interopRequireDefault(require("./link"));

var _events = _interopRequireDefault(require("./events"));

var _context = _interopRequireDefault(require("./context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Mixspa = {
  on: _events["default"].on,
  off: _events["default"].off,
  emit: _events["default"].emit,
  onLink: _link["default"].onLink,
  offLink: _link["default"].offLink,
  emitLink: _link["default"].emitLink,
  define: _app["default"].define,
  getApp: _context["default"].getApp,
  register: _context["default"].registerApp
};
var _default = Mixspa;
exports["default"] = _default;