/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains:['avatars.githubusercontent.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '', // Leave empty if no specific port is used
          pathname: '/**', // Match all paths
        },
      ],
    },
  };
  
  export default nextConfig;
  