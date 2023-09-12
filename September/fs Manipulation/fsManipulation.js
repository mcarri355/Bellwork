const fs = require('fs');
const path = require('path');

// try {
//   for (let i = 0; i < 5; i++) {
//     fs.copyFileSync(
//       path.join(__dirname, '/bell.html'),
//       path.join(__dirname, `/bell${i}.html`)
//     );
//   }
// } catch (err) {
//   console.log('error');
// }

fs.readFile(path.join(__dirname, '/bell0.html'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(
      path.join(__dirname, '/bell0.html'),
      data.replace('<h1>Blank Slate</h1>', '<h1>Home Page</h1>', 'utf8'),
      (err) => {
        console.error(err);
      }
    );
  }
});

fs.readFile(path.join(__dirname, '/bell1.html'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(
      path.join(__dirname, '/bell1.html'),
      data.replace('<h1>Blank Slate</h1>', '<h1>About Page</h1>', 'utf8'),
      (err) => {
        console.error(err);
      }
    );
  }
});

fs.readFile(path.join(__dirname, '/bell2.html'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(
      path.join(__dirname, '/bell2.html'),
      data.replace('<h1>Blank Slate</h1>', '<h1>Contact Page</h1>', 'utf8'),
      (err) => {
        console.error(err);
      }
    );
  }
});

fs.readFile(path.join(__dirname, '/bell3.html'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(
      path.join(__dirname, '/bell3.html'),
      data.replace('<h1>Blank Slate</h1>', '<h1>Gallery Page</h1>', 'utf8'),
      (err) => {
        console.error(err);
      }
    );
  }
});

fs.readFile(path.join(__dirname, '/bell4.html'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(
      path.join(__dirname, '/bell4.html'),
      data.replace(
        '<h1>Blank Slate</h1>',
        '<h1>Testimonials Page</h1>',
        'utf8'
      ),
      (err) => {
        console.error(err);
      }
    );
  }
});
