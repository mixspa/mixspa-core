"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emitLink = exports.offLink = exports.onLink = void 0;

var _events = _interopRequireDefault(require("@mixspa/events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var onLink = function onLink(handler) {
  return _events["default"].on('mixspa:url:changed', handler);
};

exports.onLink = onLink;

var offLink = function offLink(handler) {
  _events["default"].off('mixspa:url:changed', handler);
};

exports.offLink = offLink;

var emitLink = function emitLink(url) {
  _events["default"].emit('mixspa:url:changed', url);
};

exports.emitLink = emitLink;