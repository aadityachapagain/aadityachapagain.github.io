const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.js'
    },
    autoprefixer: {},
  },
};