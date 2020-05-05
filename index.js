var extend = require('legacy-extends');

var Dirent = require('./lib/Dirent');
var constants = require('./lib/constants');

var kStats = typeof Symbol !== 'undefined' ? Symbol('stats') : 'stats';

function DirentFromStats(name, stats) {
  var self = DirentFromStats.__constructor__.call(this, name);
  self[kStats] = stats;
  return self;
}
extend(DirentFromStats, Dirent, ['name']);

DirentFromStats.prototype = Object.create(Dirent.prototype);
DirentFromStats.prototype.constructor = DirentFromStats;

DirentFromStats.DirentBase = Dirent;
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
