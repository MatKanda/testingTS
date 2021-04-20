const fs = require('fs');
const path = require("path");
const libName = 'libka.js';

// File libka.js will be created or overwritten by default.
fs.copyFile(path.resolve(__dirname, '..', 'dist', libName), path.resolve(__dirname, '..', 'example', libName),
    (err) => {
        if (err) throw err;
        console.log('dist/libka.js was copied to example directory');
    });
