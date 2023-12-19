import express from 'express';
import cors from 'cors';
import config from './app/config';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: `Successfully Server Started in ${config.port}`,
  });
});

export default app;
