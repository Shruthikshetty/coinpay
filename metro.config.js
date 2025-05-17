// metro.config.js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const config = mergeConfig(getDefaultConfig(__dirname), {
  // Add custom Metro config options here if needed
});

module.exports = wrapWithReanimatedMetroConfig(config);
