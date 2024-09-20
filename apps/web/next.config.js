/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["geist"],
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
