/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['medly.com', 'www.securly.com', 'www.google.com']
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    }
};
