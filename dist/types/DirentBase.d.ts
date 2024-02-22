export = DirentBase;
declare function DirentBase(name: any, type: any): void;
declare class DirentBase {
    constructor(name: any, type: any);
    name: any;
    isDirectory(): boolean;
    isFile(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
}
declare namespace DirentBase {
    export { constants };
}
import constants = require("./constants");
