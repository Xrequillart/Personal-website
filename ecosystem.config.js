module.exports = {
  apps: [
    {
      name: 'personal',
      script: 'server.js',
      exec_mode: 'cluster',
      instances: 0,
      env: {
        "PORT": 3000,
        "NODE_ENV": "development"
      },
      env_production: {
        "PORT": 8080,
        "NODE_ENV": "production",
      }
    },
  ],
};