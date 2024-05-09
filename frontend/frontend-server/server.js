import cors from 'cors';
import express from 'express';
import apiRouter from './routes/api.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;


app.use(express.static(path.join(__dirname, '../frontend-react/build')));

app.use(cors());
app.use(express.json());
app.use("/", apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend-react/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});