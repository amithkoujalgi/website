// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Amith Koujalgi',
    tagline: 'Senior Software Engineer with 11+ years of experience in designing and developing distributed systems and cloud software products. Led development teams and mentored junior engineers. Strong background in agile methodology, mentoring and leadership in engineering. Open-source contributor. Tech enthusiast. Startup mindset.\n' +
        'Eager to acquire knowledge in emerging technologies and develop solutions that empower both users and businesses. Eager to apply comprehensive software development expertise to create value and impact for the company.',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/website/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'amithkoujalgi', // Usually your GitHub org/user name.
    projectName: 'website', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
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
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/amithkoujalgi/ollama4j/blob/main/docs',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/amithkoujalgi/ollama4j/blob/main/docs',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Overview',
                logo: {
                    alt: 'Logo',
                    src: 'img/img.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'More',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/amithkoujalgi/website/blog',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {to: 'https://www.linkedin.com/in/amithkoujalgi/', label: 'LinkedIn', position: 'left'},
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Home',
                                to: '/docs/summary',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/users/1335709/amith-koujalgi',
                            },
                            {
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/in/amithkoujalgi/',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/amithkoujalgi/',
                            },
                        ],
                    },
                ],
                copyright: `Built with Docusaurus - ${new Date().getFullYear()}`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
