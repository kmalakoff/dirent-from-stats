export default class DirentBase {
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
    name: string;
    constructor(name: string, type: string);
    isDirectory(): boolean;
    isFile(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
}
