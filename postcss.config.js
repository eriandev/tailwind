const mode = process.env.NODE_ENV
const dev = mode === 'development'
const config = { preset: ['default', { discardComments: { removeAll: true } }] }

module.exports = {
  plugins: {
    'postcss-preset-env': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    ...(!dev ? { cssnano: config } : {}),
  },
}
