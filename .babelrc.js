const path = require('node:path');

module.exports = {
  plugins: [
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@root': path.resolve(__dirname, './src'),
        },
      },
    ],
  ],
};
