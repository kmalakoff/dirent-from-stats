var constants = require('./constants');
var UV_DIRENT_TEST_DIR = constants.UV_DIRENT_TEST_DIR;
var UV_DIRENT_FILE = constants.UV_DIRENT_FILE;
var UV_DIRENT_BLOCK = constants.UV_DIRENT_BLOCK;
var UV_DIRENT_CHAR = constants.UV_DIRENT_CHAR;
var UV_DIRENT_LINK = constants.UV_DIRENT_LINK;
var UV_DIRENT_FIFO = constants.UV_DIRENT_FIFO;
var UV_DIRENT_SOCKET = constants.UV_DIRENT_SOCKET;

var kType = typeof Symbol !== 'undefined' ? Symbol('type') : 'type';

function DirentBase(name, type) {
  this.name = name;
  this[kType] = type;
}

DirentBase.constants = constants;

DirentBase.prototype.isDirectory = function isDirectory() {
  return this[kType] === UV_DIRENT_TEST_DIR;
};

DirentBase.prototype.isFile = function isFile() {
  return this[kType] === UV_DIRENT_FILE;
};

DirentBase.prototype.isBlockDevice = function isBlockDevice() {
  return this[kType] === UV_DIRENT_BLOCK;
};

DirentBase.prototype.isCharacterDevice = function isCharacterDevice() {
  return this[kType] === UV_DIRENT_CHAR;
};

DirentBase.prototype.isSymbolicLink = function isSymbolicLink() {
  return this[kType] === UV_DIRENT_LINK;
};

DirentBase.prototype.isFIFO = function isFIFO() {
  return this[kType] === UV_DIRENT_FIFO;
};

DirentBase.prototype.isSocket = function isSocket() {
  return this[kType] === UV_DIRENT_SOCKET;
};

module.exports = DirentBase;
