/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/uv-studio-index.html" },
      ],
    };
  },
};

export default nextConfig;
