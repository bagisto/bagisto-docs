module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'Bagisto Documentation',
    description: 'Bagisto Developer Portal',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico"}],
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        repo: 'bagisto/bagisto',
        repoLabel: 'Contribute to Bagisto',
        docsRepo: 'bagisto/bagisto-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',

        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Extensions', link: 'https://bagisto.com/en/extensions/' },
            { text: 'Community Forum', link: 'https://forums.bagisto.com/' }
        ],
        sidebar: {
            '/1.x/': require('./version-configs/1.x'),
            '/1.5.x/': require('./version-configs/1.5.x')
        }
    },
    markdown: {
        lineNumbers: false
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};
