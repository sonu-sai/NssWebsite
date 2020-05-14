module.exports = {
    siteMetadata: {
        title: `NSS NSSCE | Unit 128 & 198`,
        description: `Official Website of National Service Scheme (NSS) in NSS college of Engineering (NSSCE) Palakkad, Units 128 & 198`,
        author: 'Sonu Sai P K',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `NSS NSSCE PALAKKAD UNIT 128 &198`,
                short_name: `NSS NSSCE`,
                start_url: `/`,
                background_color: `#2980b9`,
                theme_color: `#2980b9`,
                display: `standalone`,
                icon: `src/images/nss-icon.png`, // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-catch-links',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
//        {
//            resolve: `gatsby-source-filesystem`,
//            options: {
//                path: `${__dirname}/src/content`,
//                name: `markdown-pages`,
//            },
//        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        optional: {
                            maxWidth: 750,
                            linkImagesToOriginal: false,
                            tracedSVG: true,
                            showCaptions: true,
                            markdownCaptions: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-figure-caption`,
                        options: { figureClassName: 'md-figure' },
                    },
                ],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        //  `gatsby-plugin-offline`, Disable during initial devloping
    ],
};
