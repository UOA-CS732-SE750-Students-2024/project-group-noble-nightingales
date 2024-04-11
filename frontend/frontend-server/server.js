import cors from 'cors';
import express from 'express';
import apiRouter from './routes/api.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/", apiRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});