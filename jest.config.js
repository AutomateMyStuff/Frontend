const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report"
    }]
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "<rootDir>"],
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  setupFiles: ["jest-canvas-mock"],
  coveragePathIgnorePatterns: ['.*__snapshots__/.*'],
  testMatch: [
    "<rootDir>/src/**/*.test.{js,jsx,ts,tsx}"
  ]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
