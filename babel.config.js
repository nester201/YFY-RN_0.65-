module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@assets': './src/assets/',
          '@components': './src/components/',
          '@config': './src/config/',
          '@containers': './src/containers/',
          '@hocs': './src/hocs/',
          '@hooks': './src/hooks/',
          '@interfaces': './src/interfaces/',
          '@models': './src/models/',
          '@navigators': './src/navigators/',
          '@services': './src/services/',
          '@store': './src/store/',
          '@theme': './src/theme/',
          '@translations': './src/translations/',
          '@types': './src/types/',
          '@utils': './src/utils/',
        },
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
};
