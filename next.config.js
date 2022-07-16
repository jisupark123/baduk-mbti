const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`,
  },
  images: {
    loader: 'imgix',
    path: process.env.PUBLIC_URL,
  },
  // env: {
  //   BASE_URL: process.env.BASE_URL,
  // },
};

module.exports = nextConfig;
