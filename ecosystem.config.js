module.exports = {
  apps: [
    {
      name: "wesy_api",
      script: "build/server.js",
      instances: 4,
      exec_mode: "cluster",
      watch: false,
      kill_timeout: 10000,
      wait_ready: true,
      listen_timeout: 10000
    }
  ]
};
