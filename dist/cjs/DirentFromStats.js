"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirentFromStats;
    }
});
var _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
var _constantsts = /*#__PURE__*/ _interop_require_default(require("./constants.js"));
var _DirentBasets = /*#__PURE__*/ _interop_require_default(require("./DirentBase.js"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var kStats = typeof Symbol !== 'undefined' ? Symbol('stats') : 'stats';
var Base = _fs.default.Dirent || _DirentBasets.default;
var DirentFromStats = /*#__PURE__*/ function(Base) {
    "use strict";
    _inherits(DirentFromStats, Base);
    function DirentFromStats(name, stats) {
        _class_call_check(this, DirentFromStats);
        var _this;
        _this = _call_super(this, DirentFromStats, [
            name
        ]);
        _this[kStats] = stats;
        return _this;
    }
    var _proto = DirentFromStats.prototype;
    _proto.isDirectory = function isDirectory() {
        return this[kStats].isDirectory();
    };
    _proto.isFile = function isFile() {
        return this[kStats].isFile();
    };
    _proto.isBlockDevice = function isBlockDevice() {
        return this[kStats].isBlockDevice();
    };
    _proto.isCharacterDevice = function isCharacterDevice() {
        return this[kStats].isCharacterDevice();
    };
    _proto.isSymbolicLink = function isSymbolicLink() {
        return this[kStats].isSymbolicLink();
    };
    _proto.isFIFO = function isFIFO() {
        return this[kStats].isFIFO();
    };
    _proto.isSocket = function isSocket() {
        return this[kStats].isSocket();
    };
    return DirentFromStats;
}(Base);
DirentFromStats.constants = _constantsts.default;
DirentFromStats.DirentStats = Base;
/* CJS INTEROP */ if (exports.__esModule && exports.default) { try { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) { exports.default[key] = exports[key]; } } catch (_) {}; module.exports = exports.default; }