const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use('/api/v1/**', createProxyMiddleware({ target: 'https://django-backend-turquoise.herokuapp.com', changeOrigin: true}))
}