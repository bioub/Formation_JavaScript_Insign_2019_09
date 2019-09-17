const fs = require('fs');

// Synchrone
try {
  const content = fs.readFileSync('01-hello.htm', { encoding: 'UTF-8' });
  fs.writeFileSync('01-hello.html.copy', content);
  console.log('Copy done');
} catch (err) {
  console.log('Erreur : ' + err.message);
}

// Asynchrone -> Callback Hell / Pyramid of Doom
fs.readFile('01-hello.html', { encoding: 'UTF-8' }, (err, content) => {
  if (err) {
    return console.log('Erreur : ' + err.message);
  }
  fs.writeFile('01-hello.html.copy', content, (err) => {
    if (err) {
      return console.log('Erreur : ' + err.message);
    }
    console.log('Copy done');
  });
});

// Asynchrone Promise (ES6+)
fs.promises.readFile('01-hello.html', { encoding: 'UTF-8' })
  .then((content) => fs.promises.writeFile('01-hello.html.copy', content))
  .then(() => console.log('Copy done'))
  .catch((err) => console.log('Erreur : ' + err.message));

// Asynchrone async/await (ES8+)
async function copy() {
  try {
    const content = await fs.promises.readFile('01-hello.htm', { encoding: 'UTF-8' });
    await fs.promises.writeFile('01-hello.html.copy', content);
    console.log('Copy done');
  } catch (err) {
    console.log('Erreur : ' + err.message);
  }
}

copy();