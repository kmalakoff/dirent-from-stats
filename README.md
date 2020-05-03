## dirent-from-stats

Create fs.Dirents from fs.Stats for compatiblity on earlier versions of Node.js.

It will inherit from fs.Dirent if it exists; otherwise, it will create a new base Dirent class.

```
var assert = require('assert');
var DirentFromStats = require('dirent-from-stats');
var fs = require('fs');
var each = require('async-each');

var DirentBase = DirentFromStats.DirentBase;

function create(root, name, callback) {
  return fs.lstat(path.join(root, name), function (err, stats) {
    err ? callback(err) : callback(null, new DirentFromStats(name, stats));
  });
}

fs.readdir(__dirname, function (err, names) {
  each(names, create.bind(null, DIR), function (err, dirents) {
    for (var index in dirents) {
      assert.ok(dirents[index] instanceof DirentBase);
      assert.ok(!fs.Dirent || dirents[index] instanceof fs.Dirent);
    }
  }
}

```
