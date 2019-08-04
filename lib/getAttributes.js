"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getAttributes = function getAttributes(element) {
  var names = element.getAttributeNames();
  return names.reduce(function (obj, n) {
    obj[n] = element.getAttribute(n);
    return obj;
  }, {});
};

var _default = getAttributes;
exports["default"] = _default;