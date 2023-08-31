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
