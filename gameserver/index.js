
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8082 });

wss.on('connection', (ws) => {
  console.log('New player connected');
  
  ws.on('message', (message) => {
    console.log('Received:', message);
    
    // Broadcast the message to all clients (e.g., game state updates)
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

console.log('Game server is running on ws://localhost:8082');
