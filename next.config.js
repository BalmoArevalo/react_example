/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:  'images.unsplash.com',
                hostname:  'es.digitaltrends.com',
            
            },//details
        ],//array
    },//image
}

module.exports = nextConfig
