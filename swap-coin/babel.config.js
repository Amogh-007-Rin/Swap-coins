module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo"]
    ],
    plugins: [
      'nativewind/babel', // This must be here for v2'
      'react-native-worklets/plugin',
      'react-native-reanimated/plugin',
    ],
  };
};