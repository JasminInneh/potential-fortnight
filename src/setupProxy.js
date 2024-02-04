const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/users', // Specify the API endpoint path
    createProxyMiddleware({
      target: 'https://potential-fortnight-rq64pxjpqqv39xx-3200.app.github.dev',
      changeOrigin: true,
    })
  );
};
