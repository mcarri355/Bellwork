const fs = require('fs');
const path = require('path');

fs.renameSync(
  path.join(__dirname, './August/New-Text-Document.txt'),
  path.join(__dirname, './August/Latin-Gobbly-Gook.txt'),
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);

fs.renameSync(
  path.join(__dirname, './August/New-Text-Document2.txt'),
  path.join(__dirname, './August/Princess-Bubblegum-Is-A-Problem.txt'),
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);

fs.renameSync(
  path.join(__dirname, './August/New-Rich-Text.rtf'),
  path.join(__dirname, './August/Learning-Is-Hard.txt'),
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);

fs.renameSync(
  path.join(__dirname, './August/tryThis/New-Document.txt'),
  path.join(__dirname, './August/tryThis/Regular-Bros-Show.txt'),
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);

fs.rename(
  path.join(__dirname, './August/tryThis/Regular Bros Show.txt'),
  path.join(__dirname, './August/Regular Bros Show.txt')
);

fs.rmdir(path.join(__dirname, '/tryThis'), function () {
  console.log('Success');
});
fs.rename(
  path.join(__dirname, './August/New Folder'),
  path.join(__dirname, './August/Answer')
);
let e = fs.readdirSync(__dirname);
let u = [];
for (let y = e.length - 1; y > e.length - 5; y--) {
  u.unshift(
    fs.readFileSync(path.join(__dirname, '/' + e[y]), 'utf-8').split(' ')[
      fs.readFileSync(path.join(__dirname, '/' + e[y]), 'utf-8').split(' ')
        .length - 1
    ]
  );
}
console.log(u);
fs.writeFileSync(
  path.join(__dirname, './August/Answer/answer.js'),
  u.join(' ')
);
