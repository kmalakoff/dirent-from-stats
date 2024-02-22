var assert = require('assert');
var generate = require('fs-generate');
var rimraf = require('rimraf');
var path = require('path');
var fs = require('fs');
var statsSpys = require('fs-stats-spys');
var each = require('async-each');

var { constants, DirentFromStats, DirentBase } = require('dirent-from-stats');

var TEST_DIR = path.resolve(path.join(__dirname, '..', '..', '.tmp', 'test'));
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
  return fs.lstat(path.join(root, name), (err, stats) => {
    err ? callback(err) : callback(null, new DirentFromStats(name, stats));
  });
}

describe('DirentFromStats', () => {
  after((done) => {
    rimraf(TEST_DIR, done);
  });
  beforeEach((done) => {
    rimraf(TEST_DIR, () => {
      generate(TEST_DIR, STRUCTURE, done);
    });
  });

  it('should load dirents', (done) => {
    var spys = statsSpys();

    fs.readdir(TEST_DIR, (err, names) => {
      assert.ok(!err);

      each(names, create.bind(null, TEST_DIR), (err, dirents) => {
        assert.ok(!err);

        for (var index in dirents) {
          var dirent = dirents[index];
          spys(dirent);
          assert.ok(fs.Dirent || dirent instanceof DirentBase);
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

  it('should create dirents by UV_DIRENT_TEST_DIR', () => {
    var dirent = new DirentBase('name', constants.UV_DIRENT_TEST_DIR);
    assert.equal(dirent.name, 'name');
    assert.equal(dirent.isDirectory(), true);
    assert.equal(dirent.isFile(), false);
    assert.equal(dirent.isBlockDevice(), false);
    assert.equal(dirent.isCharacterDevice(), false);
    assert.equal(dirent.isSymbolicLink(), false);
    assert.equal(dirent.isFIFO(), false);
    assert.equal(dirent.isSocket(), false);
  });

  it('should create dirents by UV_DIRENT_FILE', () => {
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

  it('should create dirents by UV_DIRENT_BLOCK', () => {
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

  it('should create dirents by UV_DIRENT_CHAR', () => {
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

  it('should create dirents by UV_DIRENT_LINK', () => {
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

  it('should create dirents by UV_DIRENT_FIFO', () => {
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

  it('should create dirents by UV_DIRENT_SOCKET', () => {
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
