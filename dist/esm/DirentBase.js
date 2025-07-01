import constants from './constants.js';
const { UV_DIRENT_TEST_DIR, UV_DIRENT_FILE, UV_DIRENT_BLOCK, UV_DIRENT_CHAR, UV_DIRENT_LINK, UV_DIRENT_FIFO, UV_DIRENT_SOCKET } = constants;
const kType = typeof Symbol !== 'undefined' ? Symbol('type') : 'type';
let DirentBase = class DirentBase {
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
    constructor(name, type){
        this.name = name;
        this[kType] = type;
    }
};
DirentBase.constants = constants;
export { DirentBase as default };
