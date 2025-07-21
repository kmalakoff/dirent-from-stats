import fs from 'fs';
import constants from './constants.ts';
import DirentBase from './DirentBase.ts';

const kStats = typeof Symbol !== 'undefined' ? Symbol('stats') : 'stats';
const Base = fs.Dirent || DirentBase;

import type { AnyStats } from './types.ts';

export default class DirentFromStats extends Base {
  static constants = constants;
  static AnyStats = Base;

  constructor(name: string, stats: AnyStats) {
    super(name);
    this[kStats] = stats;
  }

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
}
