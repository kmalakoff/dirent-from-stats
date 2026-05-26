import fs from 'fs';
import constants from './constants.ts';
import DirentBase from './DirentBase.ts';

const kStats = typeof Symbol !== 'undefined' ? Symbol('stats') : 'stats';
const Base = (fs.Dirent || DirentBase) as unknown as typeof DirentBase;

import type { AnyStats } from './types.ts';

export default class DirentFromStats extends Base {
  static constants = constants;
  static AnyStats = Base;

  constructor(name: string, stats: AnyStats) {
    super(name);
    (this as unknown as Record<symbol | string, unknown>)[kStats] = stats;
  }

  isDirectory() {
    return ((this as unknown as Record<symbol | string, unknown>)[kStats] as AnyStats).isDirectory();
  }
  isFile() {
    return ((this as unknown as Record<symbol | string, unknown>)[kStats] as AnyStats).isFile();
  }
  isBlockDevice() {
    return ((this as unknown as Record<symbol | string, unknown>)[kStats] as AnyStats).isBlockDevice();
  }
  isCharacterDevice() {
    return ((this as unknown as Record<symbol | string, unknown>)[kStats] as AnyStats).isCharacterDevice();
  }
  isSymbolicLink() {
    return ((this as unknown as Record<symbol | string, unknown>)[kStats] as AnyStats).isSymbolicLink();
  }
  isFIFO() {
    return ((this as unknown as Record<symbol | string, unknown>)[kStats] as AnyStats).isFIFO();
  }
  isSocket() {
    return ((this as unknown as Record<symbol | string, unknown>)[kStats] as AnyStats).isSocket();
  }
}
