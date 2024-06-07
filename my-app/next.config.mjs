import path from 'path';
import webpack from 'webpack';

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.modules.push(path.resolve('./pages/node_modules'));
    }
    return config;
  },
};

export default nextConfig;