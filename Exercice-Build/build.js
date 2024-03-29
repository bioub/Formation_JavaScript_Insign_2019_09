const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function build() {
  await fs.remove(distPath);
  await fs.mkdir(distPath);

  const contents = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  await fs.writeFile(appJsDistPath, Buffer.concat(contents));

  let contentIndexHtml = await fs.readFile(indexHtmlPath, { encoding: 'UTF-8' });
  contentIndexHtml = contentIndexHtml.replace(/<script.*<\/script>/s, '<script src="./app.js"></script>');

  await fs.writeFile(indexHtmlDistPath, contentIndexHtml);
  console.log('Build done');
}

build();
