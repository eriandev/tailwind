module.exports = {
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
    purge: ['./**/*.html'],
    theme: {
        screens: {
            sm: '600px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },
        container: {
            center: true,
            padding: '2rem'
        },
    },
    variants: {},
    plugins: []
}
