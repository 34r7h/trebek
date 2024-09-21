// gameserver/index.js
const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');

require('dotenv').config();
const { OpenAI } = require('openai');
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function queryOpenAI(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // Cheapest model
            messages: [{ role: 'user', content: prompt }],
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error querying OpenAI API:', error);
    }
}

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
