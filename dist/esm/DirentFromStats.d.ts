declare const Base: any;
import type { AnyStats } from './types.ts';
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
    static AnyStats: any;
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
