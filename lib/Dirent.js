var fs = require('fs');

module.exports =
  fs.Dirent ||
  (function () {
    function Dirent(name) {
      this.name = name;
    }
    Dirent.prototype.isDirectory = function isDirectory() {};
    Dirent.prototype.isFile = function isFile() {};
    Dirent.prototype.isBlockDevice = function isBlockDevice() {};
    Dirent.prototype.isCharacterDevice = function isCharacterDevice() {};
    Dirent.prototype.isSymbolicLink = function isSymbolicLink() {};
    Dirent.prototype.isFIFO = function isFIFO() {};
    Dirent.prototype.isSocket = function isSocket() {};
    return Dirent;
  })();
