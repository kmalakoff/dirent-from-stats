var fs = require('fs');

var constants = require('./constants');
var UV_DIRENT_DIR = constants.UV_DIRENT_DIR;
var UV_DIRENT_FILE = constants.UV_DIRENT_FILE;
var UV_DIRENT_BLOCK = constants.UV_DIRENT_BLOCK;
var UV_DIRENT_CHAR = constants.UV_DIRENT_CHAR;
var UV_DIRENT_LINK = constants.UV_DIRENT_LINK;
var UV_DIRENT_FIFO = constants.UV_DIRENT_FIFO;
var UV_DIRENT_SOCKET = constants.UV_DIRENT_SOCKET;

var kType = typeof Symbol !== 'undefined' ? Symbol('type') : 'type';

function Dirent(name, type) {
  this.name = name;
  this[kType] = type;
}

Dirent.constants = constants;

Dirent.prototype.isDirectory = function isDirectory() {
  return this[kType] === UV_DIRENT_DIR;
};

Dirent.prototype.isFile = function isFile() {
  return this[kType] === UV_DIRENT_FILE;
};

Dirent.prototype.isBlockDevice = function isBlockDevice() {
  return this[kType] === UV_DIRENT_BLOCK;
};

Dirent.prototype.isCharacterDevice = function isCharacterDevice() {
  return this[kType] === UV_DIRENT_CHAR;
};

Dirent.prototype.isSymbolicLink = function isSymbolicLink() {
  return this[kType] === UV_DIRENT_LINK;
};

Dirent.prototype.isFIFO = function isFIFO() {
  return this[kType] === UV_DIRENT_FIFO;
};

Dirent.prototype.isSocket = function isSocket() {
  return this[kType] === UV_DIRENT_SOCKET;
};

module.exports = fs.Dirent || Dirent;
