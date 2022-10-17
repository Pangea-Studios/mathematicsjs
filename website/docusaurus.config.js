// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Math',
    tagline: 'The future of math in JavaScript',
    url: 'https://pangea-studios.github.io/',
    baseUrl: '/mathematicsjs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Pangea-Studios', // Usually your GitHub org/user name.
    projectName: 'Math', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: ({ docPath }) =>
                        `https://github.com/pangea-studios/math/blob/docs/website/docs/${docPath}`,
                    editLocalizedFiles: false,
                    editCurrentVersion: false,
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    disableVersioning: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themes: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                language: ['en', 'zh'],
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            announcementBar: {
                id: 'under_development',
                content:
                    'The docs are currently under development, expect a lot of changes.',
                backgroundColor: '#25c2a0',
                textColor: '#FFFFFF',
                isCloseable: false,
            },
            navbar: {
                style: 'primary',
                items: [
                    {
                        to: '/',
                        label: 'Math',
                        position: 'left',
                        className: 'button button--lg button--primary',
                    },
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Docs',
                        className: 'button button--lg button--primary',
                    },
                    {
                        type: 'doc',
                        docId: 'guide/home/getting-started',
                        position: 'left',
                        label: 'Guide',
                        className: 'button button--lg button--primary',
                    },
                    {
                        type: 'doc',
                        docId: 'reference/home',
                        position: 'left',
                        label: 'Reference',
                        className: 'button button--lg button--primary',
                    },
                    {
                        href: 'https://github.com/pangea-studios/mathematicsjs',
                        label: 'GitHub',
                        position: 'left',
                        className: 'button button--lg button--primary',
					},
					{
						href: '/versions',
						label: 'Versions',
						position: 'right',
						className: 'button button--lg button--primary',
					},
                    {
                        type: 'search',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${new Date().getFullYear()} Pangea Studios.`,
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
