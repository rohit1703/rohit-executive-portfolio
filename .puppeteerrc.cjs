const { join } = require('path');

// Install Chromium into a project-local cache so it's present during the same
// Vercel build step that runs the prerender (the default ~/.cache/puppeteer is
// not reliably available across Vercel's install/build boundary).
module.exports = {
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
