const presets = [
    [
        '@babel/env',
        {
            targets: {
                'ie': '6',
            },
            useBuiltIns: 'entry',
            corejs: '3.22',
        },
    ],
];

const plugins = [
    'babel-plugin-dev-expression',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties'
];

module.exports = { presets, plugins };
