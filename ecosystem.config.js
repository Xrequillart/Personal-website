module.exports = {
  apps: [
    {
      name: 'personal',
      script: 'server.js',
      exec_mode: 'cluster',
      instances: 0,
      env: {
        COMMON_VARIABLE: 'true',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};