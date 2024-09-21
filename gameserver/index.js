// gameserver/index.js
const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');

// Create HTTPS server with SSL certificates
const server = https.createServer({
    cert: fs.readFileSync('/etc/letsencrypt/live/trebek.lol/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/trebek.lol/privkey.pem')
});

// Create WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('New player connected');

    ws.on('message', (message) => {
        console.log('Received:', message);

        // Broadcast message to all clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Player disconnected');
    });
});

// Start the server on port 8082
server.listen(8082, () => {
    console.log('Game server is running on wss://www.trebek.lol:8082');
});

// Error handling
server.on('error', (error) => {
    console.error('Server error:', error);
});
