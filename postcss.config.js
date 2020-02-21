module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        process.env.NODE_ENV == 'production' && require('@fullhuman/postcss-purgecss')({
          content: [
            './templates/**/*.html.twig',
          ],
          whitelist: ['html', 'body', 'code', 'pre', 'blockquote', 'p', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5'],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }),
        process.env.NODE_ENV == 'production' && require('postcss-clean'),
    ]
}