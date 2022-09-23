/** @type {import('next').NextConfig} */

module.exports = {
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
