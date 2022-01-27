module.exports = {
  apps: [
    {
      name: 'inzynieria_frontend',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      watch: ['../'],
      watch_delay: 1000,
      ignore_watch: ['node_modules']
    }
  ]
}
