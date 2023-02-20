/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        'introduction',
        {
            type: 'category',
            label: 'Products',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'products',
                },
            ],
        },
    ],
    developer: [
        'developer',
        {
            type: 'category',
            label: 'Release Guidelines',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'release',
                },
            ],
        },
        {
            type: 'category',
            label: 'Open Source Development',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'oss',
                },
            ],
        },
        'github-checks'
    ],
    kits: [
        {
            type: 'category',
            label: 'Business Partner Kit',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'kits/Business Partner Kit',
                },
            ],
        },
        {
            type: 'category',
            label: 'Data Chain Kit',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                'kits/Data Chain Kit/Adoption View',
                'kits/Data Chain Kit/Operation View',
                {
                    type: 'autogenerated',
                    dirName: 'kits/Data Chain Kit',
                },
            ],
        },
        {
            type: 'category',
            label: 'Connector Kit',
            /*link: {
                type: 'doc',
                id: 'kits/product-edc/docs/kit/adoption-view/adoption-view',
            },*/
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                {
                    type: 'category',
                    label: 'Adoption View',
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'kits/product-edc/docs/kit/adoption-view',
                        }
                    ]
                },
                {
                    type: 'category',
                    label: 'Software Development View',
                    collapsed: true,
                    items: [
                        {
                            type: 'category',
                            label: 'management-api',
                            collapsed: true,
                            items: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'kits/product-edc/docs/kit/development-view',
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'edc-controlplane',
                            collapsed: true,
                            items: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'kits/product-edc/edc-controlplane',
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'edc-dataplane',
                            collapsed: true,
                            items: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'kits/product-edc/edc-dataplane',
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'edc-extensions',
                            collapsed: true,
                            items: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'kits/product-edc/edc-extensions',
                                },
                            ]
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Software Operation View',
                    collapsed: true,
                    items: [
                        {
                            type: 'category',
                            label: 'HelmCharts',
                            collapsed: true,
                            items: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'kits/product-edc/charts',
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Buinsess Tests',
                            collapsed: true,
                            items: [
                                {
                                    type: 'autogenerated',
                                    dirName: 'kits/product-edc/edc-tests',
                                },
                            ]
                        },
                        {
                            type: 'autogenerated',
                            dirName: 'kits/product-edc/docs/kit/operation-view',
                        }
                    ]
                },
                {
                    type: 'category',
                    label: 'Documentation',
                    collapsed: true,
                    items: [
                        'kits/product-edc/CONTRIBUTING',
                        'kits/product-edc/CODE_OF_CONDUCT',
                        'kits/product-edc/CHANGELOG',
                        'kits/product-edc/README',
                        {
                            type: 'autogenerated',
                            dirName: 'kits/product-edc/docs/kit/documentation',
                        },
                        {
                            type: 'autogenerated',
                            dirName: 'kits/product-edc/docs/development',
                        },
                        {
                            type: 'autogenerated',
                            dirName: 'kits/product-edc/docs/migration',
                        },
                        {
                            type: 'autogenerated',
                            dirName: 'kits/product-edc/docs/release-notes',
                        },
                        {
                            type: 'autogenerated',
                            dirName: 'kits/product-edc/docs/samples',
                        },
                        'kits/product-edc/docs/README'
                    ]
                },
                /*{
                    type: 'autogenerated',
                    dirName: 'kits/product-edc/docs/kit',
                },
                {
                    type: 'autogenerated',
                    dirName: 'kits/product-edc/edc-extensions',
                }*/

            ]
        },
    ],
};

module.exports = sidebars;
