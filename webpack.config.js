module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: './',
    pathinfo: true,
    filename: 'lambda.js',
    library: 'index',
    libraryTarget: 'umd',
  },
  module: {},
  resolve: {
    modulesDirectories: [
      'node_modules',
    ],
    extensions: [
      '',
      '.js',
    ],
  },
};
