import fs from 'fs';
import constants from './constants.js';
import DirentBase from './DirentBase.js';
const kStats = typeof Symbol !== 'undefined' ? Symbol('stats') : 'stats';
const Base = fs.Dirent || DirentBase;
let DirentFromStats = class DirentFromStats extends Base {
    isDirectory() {
        return this[kStats].isDirectory();
    }
    isFile() {
        return this[kStats].isFile();
    }
    isBlockDevice() {
        return this[kStats].isBlockDevice();
    }
    isCharacterDevice() {
        return this[kStats].isCharacterDevice();
    }
    isSymbolicLink() {
        return this[kStats].isSymbolicLink();
    }
    isFIFO() {
        return this[kStats].isFIFO();
    }
    isSocket() {
        return this[kStats].isSocket();
    }
    constructor(name, stats){
        super(name);
        this[kStats] = stats;
    }
};
DirentFromStats.constants = constants;
DirentFromStats.DirentStats = Base;
export { DirentFromStats as default };
