/* eslint-disable prettier/prettier */
module.exports = {
  apps: [{
    name: 'pumpfund-backend',
    script: 'dist/src/main.js',
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3004
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}