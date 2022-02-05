import express from 'express';
import cors from 'cors';
import logger from 'morgan';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const params = req.params;
  res.status(500).json({ params, message: err.message });
});

export default app;
