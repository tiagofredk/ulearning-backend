const redis = require('redis');
// 1 configure our redis
const client = redis.createClient({
    // port: 6379,
    // host: 'localhost'
    host : 'global-balanced-crawdad-31957.upstash.io',
    port : '31957',
    password: 'b6f27c5f763b42ad82e8039cdc051399'
});

client.on("error", function (err) {
    throw err;
});

client.set('foo', 'bar');

module.exports = client;