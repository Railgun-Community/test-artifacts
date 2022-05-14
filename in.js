const fs = require('fs');
const compress = require('brotli/compress');
const path= ['1-2', '1-3', '2-2', '2-3', '8-2'];
for(let i=0; i<path.length; i++){
  const pathIn = `${__dirname}/${path[i]}/native.dat`;
  const pathOut = `${__dirname}/${path[i]}/native.br`
  fs.writeFileSync(pathOut, compress(fs.readFileSync(pathIn)))
}
