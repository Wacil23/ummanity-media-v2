const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
};

module.exports = withNextVideo(nextConfig);
