module.exports = {
  apps : [{
    name: 'api-example',
    script: 'api/server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
  }],

  deploy : {
    production : {
      user : 'site',
      host : '167.71.47.40',
      ref  : 'origin/master',
      repo : 'git@github.com:thykos/api-demo.git',
      path : '/home/site/api',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
