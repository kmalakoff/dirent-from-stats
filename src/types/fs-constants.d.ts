declare module 'fs-constants' {
  const constants: typeof import('fs').constants & {
    UV_DIRENT_UNKNOWN?: number;
    UV_DIRENT_FILE?: number;
    UV_DIRENT_TEST_DIR?: number;
    UV_DIRENT_LINK?: number;
    UV_DIRENT_FIFO?: number;
    UV_DIRENT_SOCKET?: number;
    UV_DIRENT_CHAR?: number;
    UV_DIRENT_BLOCK?: number;
  };
  export = constants;
}
