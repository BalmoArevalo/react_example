/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:  'es.digitaltrends.com',
            
            },
            {
              protocol: 'https',
              hostname:  'images.unsplash.com',
          }
        ],//array
    },//image
}

module.exports = nextConfig
