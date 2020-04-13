const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: true,
    }),
    addLessLoader({
        // 更改主题
        modifyVars: {
            // "@brand-primary": "#1DA57A"
        },
    }),
);
