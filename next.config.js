const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`,
  },
  images: {
    path:
      // process.env.NODE_ENV === 'production'
      //   ? process.env.PUBLIC_URL
      //   : process.env.HOME,
      // process.env.PUBLIC_URL,
      'https://baduk-mbti.vercel.app',
  },
  // env: {
  //   BASE_URL: process.env.BASE_URL,
  // },
};

module.exports = nextConfig;
