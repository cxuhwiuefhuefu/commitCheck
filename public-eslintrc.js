module.exports = {
    extends: 'eslint:recommended', // 指定eslint的解析器
    env: { // 指定代码运行的宿主环境
        node: true
    },
    rules: { // 启用额外的规则或覆盖的规则
        'no-console': 'off',
        'indent': ['error', 2],
        'quotes': ['error', 'single']
    },
    parser: {},
    env: {
        es6: true,
        node: true,
        mocha: true
    }
    
};
