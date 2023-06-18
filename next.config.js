/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // 로그인기능 위해 임시주석
  //외부 이미지 사용
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'source.boringavatars.com/.*',
      },
    ],
  },
};

module.exports = nextConfig;
