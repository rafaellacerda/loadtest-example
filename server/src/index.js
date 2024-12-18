import cors from 'cors';
import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.post('/api/auth', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', (msg) => {
    console.log('message: ' + msg);
    socket.emit('message', `Echo: ${msg}`);
  });
});

httpServer.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export { app };
