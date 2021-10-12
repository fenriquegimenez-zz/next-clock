/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['es-AR', 'en'],
    defaultLocale: 'es-AR',
  },
};

module.exports = nextTranslate();
