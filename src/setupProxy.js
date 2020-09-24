const { createProxyMiddleware } = require('http-proxy-middleware');  

module.exports = function (app) {
    app.use(createProxyMiddleware('/api',
        {
            target: 'http://127.0.0.1:7070/api/',
            pathRewrite: {
                '^/api': '',
            },
            changeOrigin: true,
            secure: false, // 是否验证证书
            ws: true, // 启用websocket
        }
    ));
};