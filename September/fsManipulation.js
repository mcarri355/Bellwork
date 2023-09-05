const fs = require('fs');
const path = require('path');

try {
  for (let i = 1; i < 4; i++) {
    fs.copyFileSync(
      path.join(__dirname, '/bell.html'),
      path.join(__dirname, `/bell${i}.html`)
    );
  }
} catch (err) {
  console.log('error');
}

let replace1 = data.replace(path.join(__dirname, '/bell.html'));
fs.writeFileSync(path.join(__dirname, '/bell1.html'), 'utf8');
