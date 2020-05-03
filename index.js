var Dirent = require('./lib/Dirent');

module.exports = (function () {
  var kStats = typeof Symbol !== 'undefined' ? Symbol('stats') : 'stats';

  var _super = require('./lib/createHelpers').createSuper(Dirent);
  function DirentFromStats(name, stats) {
    var _this = _super.call(this);
    _this.name = name;
    _this[kStats] = stats;
    return _this;
  }
  DirentFromStats.prototype = Object.create(Dirent.prototype);
  DirentFromStats.prototype.constructor = DirentFromStats;

  DirentFromStats.DirentBase = Dirent;

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
  return DirentFromStats;
})();
