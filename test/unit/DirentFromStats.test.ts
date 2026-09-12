import assert from 'assert';
import each from 'async-each';
import { DirentBase, DirentFromStats } from 'dirent-from-stats';
import fs from 'fs';
import generate from 'fs-generate';
import { safeRm } from 'fs-remove-compat';
import statsSpys from 'fs-stats-spys';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(typeof __filename !== 'undefined' ? __filename : url.fileURLToPath(import.meta.url));
const TEST_DIR = path.resolve(path.join(__dirname, '..', '..', '.tmp', 'test'));
const STRUCTURE = {
  file1: 'a',
  file2: 'b',
  dir1: null,
  'dir2/file1': 'c',
  'dir2/file2': 'd',
  'dir3/dir4/file1': 'e',
  'dir3/dir4/dir5': null,
  filelink1: '~dir3/dir4/file1',
  'dir3/filelink2': '~dir2/file1',
};

function create(root: string, name: string, callback: (err?: Error | null, result?: DirentFromStats) => void): void {
  return fs.lstat(path.join(root, name), (err, stats) => {
    err ? callback(err) : callback(undefined, new DirentFromStats(name, stats));
  });
}

describe('DirentFromStats', () => {
  after((done) => {
    safeRm(TEST_DIR, done);
  });
  beforeEach((done) => {
    safeRm(TEST_DIR, () => {
      generate(TEST_DIR, STRUCTURE, (): void => {
        done();
      });
    });
  });

  it('should load dirents', (done) => {
    const spys = statsSpys();

    fs.readdir(TEST_DIR, (err, names) => {
      assert.ok(!err);

      each<string, DirentFromStats>(names, create.bind(null, TEST_DIR), (err, dirents) => {
        assert.ok(!err);

        for (const index in dirents) {
          const dirent = (dirents as DirentFromStats[])[index as unknown as number];
          spys(dirent as unknown as fs.Dirent);
          assert.ok(fs.Dirent || dirent instanceof DirentBase);
          assert.ok(!fs.Dirent || dirent instanceof fs.Dirent);
          assert.equal(dirent.name, names[index as unknown as number]);
        }
        assert.equal(spys.callCount, 6);
        assert.equal(spys.dir.callCount, 3);
        assert.equal(spys.file.callCount, 2);
        assert.equal(spys.link.callCount, 1);
        done();
      });
    });
  });
});
