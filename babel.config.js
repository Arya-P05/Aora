module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["nane;-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};
