"use strict";
var fs = require("fs");
var extend = require("legacy-extends");
var DirentBase = require("./DirentBase");
var constants = require("./constants");
var kStats = typeof Symbol !== "undefined" ? Symbol("stats") : "stats";
var Base = fs.Dirent || DirentBase;
function DirentFromStats(name, stats) {
    var self = DirentFromStats.superConstruct.call(this, name);
    self[kStats] = stats;
    return self;
}
extend(DirentFromStats, Base, {
    ensureProperties: [
        "name"
    ]
});
DirentFromStats.Dirent = Base;
DirentFromStats.constants = constants;
DirentFromStats.prototype.isDirectory = function isDirectory() {
    return this[kStats].isDirectory();
};
DirentFromStats.prototype.isFile = function isFile() {
    return this[kStats].isFile();
};
DirentFromStats.prototype.isBlockDevice = function isBlockDevice() {
    return this[kStats].isBlockDevice();
};
DirentFromStats.prototype.isCharacterDevice = function isCharacterDevice() {
    return this[kStats].isCharacterDevice();
};
DirentFromStats.prototype.isSymbolicLink = function isSymbolicLink() {
    return this[kStats].isSymbolicLink();
};
DirentFromStats.prototype.isFIFO = function isFIFO() {
    return this[kStats].isFIFO();
};
DirentFromStats.prototype.isSocket = function isSocket() {
    return this[kStats].isSocket();
};
module.exports = DirentFromStats;
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }