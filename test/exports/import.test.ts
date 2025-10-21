import assert from 'assert';
import { constants, DirentBase, DirentFromStats } from 'dirent-from-stats';

describe('exports .mjs', () => {
  it('dirent', () => {
    assert.equal(typeof constants, 'object');
    assert.equal(typeof DirentFromStats, 'function');
    assert.equal(typeof DirentBase, 'function');
  });
});
