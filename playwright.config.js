const { PlaywrightTestConfig } = require('@playwright/test');

const config = {
  retries: 1,
  timeout: 20000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    video: "off",
    screenshot: "off"
  },

  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium' }
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' }
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' }
    },
  ]
}

module.exports = config;