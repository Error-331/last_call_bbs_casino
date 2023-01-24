const presets = [
    [
        '@babel/env',
        {
            targets: {
                'ie': '8',
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

module.exports = {
    'assumptions': {
        'privateFieldsAsProperties': true,
    },

    presets,
    plugins
};
