import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import imageRouter from './routes/image.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));


app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.use('/api/v1/images', imageRouter)

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () => console.log('Server started on port http://localhost:8080'))
  } catch(error) {
    console.log(error)
  }
}

// server for socket.io
// server.listen(3001, () => {
//   console.log("SERVER RUNNING ON http://localhost:3001")
// });

startServer();