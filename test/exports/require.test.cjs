const assert = require('assert');
// @ts-ignore
const { constants, DirentFromStats, DirentBase } = require('dirent-from-stats');

describe('exports .mjs', () => {
  it('dirent', () => {
    assert.equal(typeof constants, 'object');
    assert.equal(typeof DirentFromStats, 'function');
    assert.equal(typeof DirentBase, 'function');
  });
});
