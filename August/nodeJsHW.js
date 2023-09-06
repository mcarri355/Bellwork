const fs = require('fs');
const path = require('path');

fs.renameSync(
  path.join(__dirname, 'New-Text-Document.txt'),
  path.join(__dirname, 'Latin-Gobbly-Gook.txt'),
  function (err) {
    if (err) {
      console.log(err);
      return;
    }
  }
);

fs.renameSync(
  path.join(__dirname, 'New-Text-Document2.txt'),
  path.join(__dirname, 'Princess-Bubblegum-Is-A-Problem.txt'),
  function (err) {
    if (err) {
      console.log(err);
      return;
    }
  }
);

fs.renameSync(
  path.join(__dirname, 'New-Rich-Text.rtf'),
  path.join(__dirname, 'Learning-Is-Hard.txt'),
  function (err) {
    if (err) {
      console.log(err);
      return;
    }
  }
);

fs.renameSync(
  path.join(__dirname, '/tryThis/New-Document.txt'),
  path.join(__dirname, '/tryThis/Regular-Bros-Show.txt'),
  function (err) {
    if (err) {
      console.log(err);
      return;
    }
  }
);

fs.rename(
  path.join(dirname, '/tryThis/Regular Bros Show.txt'),
  path.join(dirname, '/Regular Bros Show.txt')
);
fs.rmdir(path.join(dirname, '/tryThis'), function () {
  console.log('Success');
});
fs.rename(
  path.join(dirname, '/New Folder'),
  path.join(dirname, '/Answer')
);
let e = fs.readdirSync(dirname);
let u = [];
for (let y = e.length - 1; y > e.length - 5; y--) {
  u.unshift(
    fs.readFileSync(path.join(dirname, '/' + e[y]), 'utf-8').split(' ')[
      fs.readFileSync(path.join(dirname, '/' + e[y]), 'utf-8').split(' ')
        .length - 1
    ]
  );
}
console.log(u);
fs.writeFileSync(path.join(__dirname, '/Answer/answer.js'), u.join(' '));