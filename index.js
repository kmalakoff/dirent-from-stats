var Dirent = require('./lib/Dirent');
var createHelpers = require('./lib/createHelpers');

module.exports = (function () {
  function DirentFromStats(name, stats) {
    var _this;
    createHelpers.classCallCheck(this, DirentFromStats);
    _this = _super.call(this, name, null);
    _this.stats = stats;
    return _this;
  }
  var _super = createHelpers.createSuper(DirentFromStats);
  createHelpers.inherits(DirentFromStats, Dirent);
  DirentFromStats.DirentBase = Dirent;

  DirentFromStats.prototype.isDirectory = function isDirectory() {
    return this.stats.isDirectory();
  };
  DirentFromStats.prototype.isFile = function isFile() {
    return this.stats.isFile();
  };
  DirentFromStats.prototype.isBlockDevice = function isBlockDevice() {
    return this.stats.isBlockDevice();
  };
  DirentFromStats.prototype.isCharacterDevice = function isCharacterDevice() {
    return this.stats.isCharacterDevice();
  };
  DirentFromStats.prototype.isSymbolicLink = function isSymbolicLink() {
    return this.stats.isSymbolicLink();
  };
  DirentFromStats.prototype.isFIFO = function isFIFO() {
    return this.stats.isFIFO();
  };
  DirentFromStats.prototype.isSocket = function isSocket() {
    return this.stats.isSocket();
  };
  return DirentFromStats;
})();
