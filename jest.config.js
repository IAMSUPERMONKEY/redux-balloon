module.exports = {
  verbose: true,
  preset: 'ts-jest/presets/js-with-babel',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testRegex: '/__tests__/.*\\.(test|spec)\\.[jt]sx?$',
  testPathIgnorePatterns: [
    'node_modules',
    'setup/.*-setup.js',
    'mocks/.*.js'
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    'setup/.*-setup.js',
    'mocks/.*.js'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/mocks/file-mock.js',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupFiles: [],
  globals: {}
};
