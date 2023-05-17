/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //외부 이미지 사용
    images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "k.kakaocdn.net",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
