const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, './Master'), (err, data) => {
  if (err) {
    console.error(err);
  } else {
    var i = 0;
    data.forEach((x) => {
      console.log(path.join(__dirname, `./Master/${x}`));
      const names = [
        '1.html',
        '2.html',
        '3.html',
        '4.html',
        '5.html',
        '6.html',
      ];
      fs.rename(
        path.join(__dirname, `./Master/${x}`),
        path.join(__dirname, `./Master/${names[i]}`),
        (err, data) => {
          if (err) {
            console.error(err);
          }
        }
      );
      i++;
    });
  }
});
