const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use('/weather',
    createProxyMiddleware({
      target: 'https://api.oikolab.com', // API endpoint 1
      changeOrigin: true
    })
  );
  app.use(
    createProxyMiddleware('/singleweather',{
      target: 'http://localhost:5000', // API endpoint 1
      changeOrigin: true
    })
  );
  app.use(
    createProxyMiddleware('/avgweather',{
      target: 'http://localhost:5000', // API endpoint 1
      changeOrigin: true
    })
  );
}