"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _fsconstants = /*#__PURE__*/ _interop_require_default(require("fs-constants"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = {
    UV_DIRENT_UNKNOWN: _fsconstants.default.UV_DIRENT_UNKNOWN || 0,
    UV_DIRENT_FILE: _fsconstants.default.UV_DIRENT_FILE || 1,
    UV_DIRENT_TEST_DIR: _fsconstants.default.UV_DIRENT_TEST_DIR || 2,
    UV_DIRENT_LINK: _fsconstants.default.UV_DIRENT_LINK || 3,
    UV_DIRENT_FIFO: _fsconstants.default.UV_DIRENT_FIFO || 4,
    UV_DIRENT_SOCKET: _fsconstants.default.UV_DIRENT_SOCKET || 5,
    UV_DIRENT_CHAR: _fsconstants.default.UV_DIRENT_CHAR || 6,
    UV_DIRENT_BLOCK: _fsconstants.default.UV_DIRENT_BLOCK || 7
};
/* CJS INTEROP */ if (exports.__esModule && exports.default) { try { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) { exports.default[key] = exports[key]; } } catch (_) {}; module.exports = exports.default; }