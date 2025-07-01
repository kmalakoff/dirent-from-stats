"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirentBase;
    }
});
var _constantsts = /*#__PURE__*/ _interop_require_default(require("./constants.js"));
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var UV_DIRENT_TEST_DIR = _constantsts.default.UV_DIRENT_TEST_DIR, UV_DIRENT_FILE = _constantsts.default.UV_DIRENT_FILE, UV_DIRENT_BLOCK = _constantsts.default.UV_DIRENT_BLOCK, UV_DIRENT_CHAR = _constantsts.default.UV_DIRENT_CHAR, UV_DIRENT_LINK = _constantsts.default.UV_DIRENT_LINK, UV_DIRENT_FIFO = _constantsts.default.UV_DIRENT_FIFO, UV_DIRENT_SOCKET = _constantsts.default.UV_DIRENT_SOCKET;
var kType = typeof Symbol !== 'undefined' ? Symbol('type') : 'type';
var DirentBase = /*#__PURE__*/ function() {
    "use strict";
    function DirentBase(name, type) {
        _class_call_check(this, DirentBase);
        this.name = name;
        this[kType] = type;
    }
    var _proto = DirentBase.prototype;
    _proto.isDirectory = function isDirectory() {
        return this[kType] === UV_DIRENT_TEST_DIR;
    };
    _proto.isFile = function isFile() {
        return this[kType] === UV_DIRENT_FILE;
    };
    _proto.isBlockDevice = function isBlockDevice() {
        return this[kType] === UV_DIRENT_BLOCK;
    };
    _proto.isCharacterDevice = function isCharacterDevice() {
        return this[kType] === UV_DIRENT_CHAR;
    };
    _proto.isSymbolicLink = function isSymbolicLink() {
        return this[kType] === UV_DIRENT_LINK;
    };
    _proto.isFIFO = function isFIFO() {
        return this[kType] === UV_DIRENT_FIFO;
    };
    _proto.isSocket = function isSocket() {
        return this[kType] === UV_DIRENT_SOCKET;
    };
    return DirentBase;
}();
DirentBase.constants = _constantsts.default;
/* CJS INTEROP */ if (exports.__esModule && exports.default) { try { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) { exports.default[key] = exports[key]; } } catch (_) {}; module.exports = exports.default; }