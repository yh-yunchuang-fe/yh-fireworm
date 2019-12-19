module.exports = {
    "presets": ["@babel/preset-react", "@babel/env"],
    "plugins": [
        "@babel/plugin-transform-runtime",
        "react-hot-loader/babel",
        ["@babel/plugin-proposal-class-properties", {"loose": true}],
        ["import", {
            "libraryName": "antd",
            "libraryDirectory": "es",
            "style": true // `style: true` 会加载 less 文件
        }]
    ],
    "env": {
        "production": {
            "plugins": [["transform-remove-console", { "exclude": ["error", "warn"] }]]
        }
    }
}