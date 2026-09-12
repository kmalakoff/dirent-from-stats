import assert from 'assert';
import { constants, DirentBase } from 'dirent-from-stats';

describe('DirentBase', () => {
  it('should create dirents by UV_DIRENT_TEST_DIR', () => {
    const dirent = new DirentBase('name', constants.UV_DIRENT_TEST_DIR as unknown as string);
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
    const dirent = new DirentBase('name', constants.UV_DIRENT_FILE as unknown as string);
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
    const dirent = new DirentBase('name', constants.UV_DIRENT_BLOCK as unknown as string);
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
    const dirent = new DirentBase('name', constants.UV_DIRENT_CHAR as unknown as string);
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
    const dirent = new DirentBase('name', constants.UV_DIRENT_LINK as unknown as string);
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
    const dirent = new DirentBase('name', constants.UV_DIRENT_FIFO as unknown as string);
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
    const dirent = new DirentBase('name', constants.UV_DIRENT_SOCKET as unknown as string);
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
