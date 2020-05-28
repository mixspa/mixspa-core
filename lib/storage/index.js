"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DefaultEngine = _interopRequireDefault(require("./engines/DefaultEngine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MixspaStorage = /*#__PURE__*/function () {
  function MixspaStorage() {
    _classCallCheck(this, MixspaStorage);
  }

  _createClass(MixspaStorage, null, [{
    key: "use",
    value: function use(value) {
      MixspaStorage.engine = value;
    }
  }, {
    key: "put",
    value: function put(key, value) {
      MixspaStorage.engine.set(key, value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return MixspaStorage.engine.get(key);
    }
  }, {
    key: "has",
    value: function has(key) {
      return !!MixspaStorage.engine.get(key);
    }
  }, {
    key: "remove",
    value: function remove(key) {
      return MixspaStorage.engine.remove(key);
    }
  }, {
    key: "clear",
    value: function clear() {
      MixspaStorage.engine.clear();
    }
  }]);

  return MixspaStorage;
}();

_defineProperty(MixspaStorage, "engine", _DefaultEngine["default"]);

var _default = MixspaStorage;
exports["default"] = _default;