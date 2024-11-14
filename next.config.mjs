/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://127.0.0.1:5000/api/:path*' // Proxy to Backend 
            },
            {
                source: '/static_assets/:path*',
                destination: 'http://127.0.0.1:5000/static_assets/:path*' // Proxy to Backend 
            },
            {
                source: '/nomreyar/my/:path*',
                destination: 'http://127.0.0.1:5000/my/:path*' // Proxy to Backend 
            }
        ]
    },
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ups.nomreyar.com',
                port: '',
            },
        ],
  },
};

export default nextConfig;
