import fs from 'fs';
import DirentBase from './DirentBase.js';
declare const Base: typeof DirentBase | typeof fs.Dirent;
import type { AnyStats } from './types.js';
export default class DirentFromStats extends Base {
    static constants: {
        UV_DIRENT_UNKNOWN: any;
        UV_DIRENT_FILE: any;
        UV_DIRENT_TEST_DIR: any;
        UV_DIRENT_LINK: any;
        UV_DIRENT_FIFO: any;
        UV_DIRENT_SOCKET: any;
        UV_DIRENT_CHAR: any;
        UV_DIRENT_BLOCK: any;
    };
    static AnyStats: typeof DirentBase | typeof fs.Dirent;
    constructor(name: string, stats: AnyStats);
    isDirectory(): any;
    isFile(): any;
    isBlockDevice(): any;
    isCharacterDevice(): any;
    isSymbolicLink(): any;
    isFIFO(): any;
    isSocket(): any;
}
export {};
