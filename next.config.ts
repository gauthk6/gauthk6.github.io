/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Required for GitHub Pages
  images: {
    unoptimized: true, // Required if you're using <Image>
  },
};

export default nextConfig;
