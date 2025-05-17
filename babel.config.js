module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './src',
        },
      },
    ],
    'react-native-reanimated/plugin', // <-- Add this as a separate entry at the end
  ],
};
