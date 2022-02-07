import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { authRouter } from './routes/api';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
// app.use('/api/transactions');
// app.use('/api/statistics');

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });

  if (!err.status) {
    res.status(500).json({ message: err.message });
  }
});

export default app;
