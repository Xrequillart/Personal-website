module.exports = {
  apps: [
    {
      name: 'personal',
      script: 'server.js',
      exec_mode: 'cluster',
      instances: 0,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};