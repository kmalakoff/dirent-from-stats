import constants from './constants.ts';

const { UV_DIRENT_TEST_DIR, UV_DIRENT_FILE, UV_DIRENT_BLOCK, UV_DIRENT_CHAR, UV_DIRENT_LINK, UV_DIRENT_FIFO, UV_DIRENT_SOCKET } = constants;

const kType = typeof Symbol !== 'undefined' ? Symbol('type') : 'type';

export default class DirentBase {
  static constants = constants;
  name: string;

  constructor(name: string, type: string) {
    this.name = name;
    this[kType] = type;
  }

  isDirectory() {
    return this[kType] === UV_DIRENT_TEST_DIR;
  }

  isFile() {
    return this[kType] === UV_DIRENT_FILE;
  }

  isBlockDevice() {
    return this[kType] === UV_DIRENT_BLOCK;
  }

  isCharacterDevice() {
    return this[kType] === UV_DIRENT_CHAR;
  }

  isSymbolicLink() {
    return this[kType] === UV_DIRENT_LINK;
  }

  isFIFO() {
    return this[kType] === UV_DIRENT_FIFO;
  }

  isSocket() {
    return this[kType] === UV_DIRENT_SOCKET;
  }
}
