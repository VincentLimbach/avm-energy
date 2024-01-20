const nodeExternals = require('webpack-node-externals');

module.exports = {
  // Your Webpack configuration settings...
  target: 'node', // Set the target to 'node' for Node.js environment
  externals: [nodeExternals()], // Exclude Node.js core modules
  // ...
};
