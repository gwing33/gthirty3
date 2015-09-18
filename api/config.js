module.exports = {
  development: {
    isProduction: false,
    apiPort: process.env.APIPORT,
    instagramToken: '365168422.09ca6d7.fe98781ffc4a442ba6d8e7b702aa14dd'
  },
  production: {
    isProduction: true,
    apiPort: process.env.APIPORT,
    instagramToken: '365168422.2ac9a7e.f8dc4e6bc4f14bea9e07d55de91b6ae8'
  }
}[process.env.NODE_ENV || 'development'];
