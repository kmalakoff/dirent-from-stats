# dirent-from-stats

Create `fs.Dirent` values from `fs.Stats` for compatibility with earlier Node.js
versions.

It will inherit from fs.Dirent if it exists; otherwise, it will create a new base Dirent class.

```bash
npm install dirent-from-stats
```js

```
var DirentFromStats = require('dirent-from-stats').DirentFromStats;
var fs = require('fs');
var path = require('path');

var stats = fs.lstatSync(__filename);
var dirent = new DirentFromStats(path.basename(__filename), stats);
console.log(dirent.isFile()); // true
```

`DirentFromStats` also exports `DirentBase` and `constants`.
