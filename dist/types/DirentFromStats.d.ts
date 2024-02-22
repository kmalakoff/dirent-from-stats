/// <reference types="node" />
export = DirentFromStats;
declare function DirentFromStats(name: any, stats: any): any;
declare class DirentFromStats {
    constructor(name: any, stats: any);
    isDirectory(): any;
    isFile(): any;
    isBlockDevice(): any;
    isCharacterDevice(): any;
    isSymbolicLink(): any;
    isFIFO(): any;
    isSocket(): any;
}
declare namespace DirentFromStats {
    export { Base as Dirent };
    export { constants };
}
declare var Base: typeof DirentBase | typeof fs.Dirent;
import constants = require("./constants");
import DirentBase = require("./DirentBase");
import fs = require("fs");
