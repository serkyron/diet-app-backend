module.exports = {
    apps: [{
        name: 'diet-app',
        script: './dist/main.js',
        kill_timeout: 60000,
        wait_ready: true,
        listen_timeout: 120000,
        instances : "max",
        exec_mode: 'cluster',
        exec_interpreter: "node",
    }],
};
