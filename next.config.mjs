/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gckuwait.com',
      },
      {
        protocol: 'http',
        hostname: 'photos.wikimapia.org',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'static.trip101.com',
      },
      {
        protocol: 'https',
        hostname: 'content.fortune.com',
      },
      {
        protocol: 'https',
        hostname: 'kuwaitlocal.com',
      },
      {
        protocol: 'https',
        hostname: 'www.kuna.net.kw',
      },
      {
        protocol: 'https',
        hostname: 'news.kuwaittimes.net',
      },
    ],
  },
};

export default nextConfig;
