module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc',
    },
  },
};
