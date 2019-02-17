module.exports = {
  rootDir: '../',
  testURL: 'http://localhost/',
  globals: { },
  testMatch: ['<rootDir>/src/**/__tests__/*.js', '<rootDir>/src/**/?(*.)+(spec|test).js'],
  testPathIgnorePatterns: [
    '<rootDir>/src/index.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/config/__init__/setupTests.js'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/index.js',
    '<rootDir>/lib',
    '<rootDir>/coverage',
    '<rootDir>/node_modules'
  ]
}
