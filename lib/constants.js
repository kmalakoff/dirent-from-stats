// eslint-disable-next-line node/no-deprecated-api
var constants = require('fs').constants || {};

module.exports = {
  UV_DIRENT_UNKNOWN: constants.UV_DIRENT_UNKNOWN || 0,
  UV_DIRENT_FILE: constants.UV_DIRENT_FILE || 1,
  UV_DIRENT_TEST_DIR: constants.UV_DIRENT_TEST_DIR || 2,
  UV_DIRENT_LINK: constants.UV_DIRENT_LINK || 3,
  UV_DIRENT_FIFO: constants.UV_DIRENT_FIFO || 4,
  UV_DIRENT_SOCKET: constants.UV_DIRENT_SOCKET || 5,
  UV_DIRENT_CHAR: constants.UV_DIRENT_CHAR || 6,
  UV_DIRENT_BLOCK: constants.UV_DIRENT_BLOCK || 7,
};
