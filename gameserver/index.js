const https = require('https');
const fs = require('fs');

const server = https.createServer({
    cert: fs.readFileSync('/etc/letsencrypt/live/trebek.lol/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/trebek.lol/privkey.pem')
});

const wss = new WebSocket.Server({ server });

server.listen(8082, () => {
    console.log('Game server is running on wss://your_ip:8082');
});

const socket = new WebSocket('wss://216.126.35.68:8082'); // Ensure this URL is correct
