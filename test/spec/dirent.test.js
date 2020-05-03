var assert = require('assert');
var generate = require('fs-generate');
var rimraf = require('rimraf');
var path = require('path');
var fs = require('fs');
var statsSpys = require('fs-stats-spys');
var each = require('async-each');

var DirentFromStats = require('../..');
var DirentBase = DirentFromStats.DirentBase;
var constants = require('../../lib/constants');

var DIR = path.resolve(path.join(__dirname, '..', 'data'));
var STRUCTURE = {
  file1: 'a',
  file2: 'b',
  dir1: null,
  'dir2/file1': 'c',
  'dir2/file2': 'd',
  'dir3/dir4/file1': 'e',
  'dir3/dir4/dir5': null,
  filelink1: '~dir3/dir4/file1',
  'dir3/filelink2': '~dir2/file1',
};

function create(root, name, callback) {
  return fs.lstat(path.join(root, name), function (err, stats) {
    err ? callback(err) : callback(null, new DirentFromStats(name, stats));
  });
}

describe('DirentFromStats', function () {
  after(function (done) {
    rimraf(DIR, done);
  });
  beforeEach(function (done) {
    rimraf(DIR, function () {
      generate(DIR, STRUCTURE, done);
    });
  });

  it('should load dirents', function (done) {
    var spys = statsSpys();

    fs.readdir(DIR, function (err, names) {
      assert.ok(!err);

      each(names, create.bind(null, DIR), function (err, dirents) {
        assert.ok(!err);

        for (var index in dirents) {
          var dirent = dirents[index];
          spys(dirent);
          assert.ok(dirent instanceof DirentBase);
          assert.ok(!fs.Dirent || dirent instanceof fs.Dirent);
          assert.equal(dirent.name, names[index]);
        }
        assert.equal(spys.callCount, 6);
        assert.equal(spys.dir.callCount, 3);
        assert.equal(spys.file.callCount, 2);
        assert.equal(spys.link.callCount, 1);
        done();
      });
    });
  });

  it('should create dirents by UV_DIRENT_DIR', function () {
    var dirent = new DirentBase('name', constants.UV_DIRENT_DIR);
    assert.equal(dirent.name, 'name');
    assert.equal(dirent.isDirectory(), true);
    assert.equal(dirent.isFile(), false);
    assert.equal(dirent.isBlockDevice(), false);
    assert.equal(dirent.isCharacterDevice(), false);
    assert.equal(dirent.isSymbolicLink(), false);
    assert.equal(dirent.isFIFO(), false);
    assert.equal(dirent.isSocket(), false);
  });

  it('should create dirents by UV_DIRENT_FILE', function () {
    var dirent = new DirentBase('name', constants.UV_DIRENT_FILE);
    assert.equal(dirent.name, 'name');
    assert.equal(dirent.isDirectory(), false);
    assert.equal(dirent.isFile(), true);
    assert.equal(dirent.isBlockDevice(), false);
    assert.equal(dirent.isCharacterDevice(), false);
    assert.equal(dirent.isSymbolicLink(), false);
    assert.equal(dirent.isFIFO(), false);
    assert.equal(dirent.isSocket(), false);
  });

  it('should create dirents by UV_DIRENT_BLOCK', function () {
    var dirent = new DirentBase('name', constants.UV_DIRENT_BLOCK);
    assert.equal(dirent.name, 'name');
    assert.equal(dirent.isDirectory(), false);
    assert.equal(dirent.isFile(), false);
    assert.equal(dirent.isBlockDevice(), true);
    assert.equal(dirent.isCharacterDevice(), false);
    assert.equal(dirent.isSymbolicLink(), false);
    assert.equal(dirent.isFIFO(), false);
    assert.equal(dirent.isSocket(), false);
  });

  it('should create dirents by UV_DIRENT_CHAR', function () {
    var dirent = new DirentBase('name', constants.UV_DIRENT_CHAR);
    assert.equal(dirent.name, 'name');
    assert.equal(dirent.isDirectory(), false);
    assert.equal(dirent.isFile(), false);
    assert.equal(dirent.isBlockDevice(), false);
    assert.equal(dirent.isCharacterDevice(), true);
    assert.equal(dirent.isSymbolicLink(), false);
    assert.equal(dirent.isFIFO(), false);
    assert.equal(dirent.isSocket(), false);
  });

  it('should create dirents by UV_DIRENT_LINK', function () {
    var dirent = new DirentBase('name', constants.UV_DIRENT_LINK);
    assert.equal(dirent.name, 'name');
    assert.equal(dirent.isDirectory(), false);
    assert.equal(dirent.isFile(), false);
    assert.equal(dirent.isBlockDevice(), false);
    assert.equal(dirent.isCharacterDevice(), false);
    assert.equal(dirent.isSymbolicLink(), true);
    assert.equal(dirent.isFIFO(), false);
    assert.equal(dirent.isSocket(), false);
  });

  it('should create dirents by UV_DIRENT_FIFO', function () {
    var dirent = new DirentBase('name', constants.UV_DIRENT_FIFO);
    assert.equal(dirent.name, 'name');
    assert.equal(dirent.isDirectory(), false);
    assert.equal(dirent.isFile(), false);
    assert.equal(dirent.isBlockDevice(), false);
    assert.equal(dirent.isCharacterDevice(), false);
    assert.equal(dirent.isSymbolicLink(), false);
    assert.equal(dirent.isFIFO(), true);
    assert.equal(dirent.isSocket(), false);
  });

  it('should create dirents by UV_DIRENT_SOCKET', function () {
    var dirent = new DirentBase('name', constants.UV_DIRENT_SOCKET);
    assert.equal(dirent.name, 'name');
    assert.equal(dirent.isDirectory(), false);
    assert.equal(dirent.isFile(), false);
    assert.equal(dirent.isBlockDevice(), false);
    assert.equal(dirent.isCharacterDevice(), false);
    assert.equal(dirent.isSymbolicLink(), false);
    assert.equal(dirent.isFIFO(), false);
    assert.equal(dirent.isSocket(), true);
  });
});
