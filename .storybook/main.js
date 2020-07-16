const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'));

    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { typescript: true }]],
        },
      },
      { test: /\.scss$/,
        use: [
          ("style-loader"),
          { loader: "css-modules-typescript-loader"},
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" },
        ],
      },
    );

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
