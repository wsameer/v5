/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/v5',
    reactStrictMode: true,
    images: {
        domains: [
            'images.ctfassets.net',
            'medly.com',
            'www.securly.com',
            'www.google.com'
        ]
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    }
};
module.exports = nextConfig;
