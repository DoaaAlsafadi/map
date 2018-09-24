var copy = require('./copy.config.js');

copy.copyStyleSheets = {
  src: ['./node_modules/devextreme/dist/css'],
  dest: './src/assets/css'
};

module.exports = copy;
