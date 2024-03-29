import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import swaggerDocument from './swagger.json';
import {
  authRouter,
  categoryRouter,
  googleAuthRouter,
  userRouter,
  transactionRouter,
  statisticRouter,
} from './routes/api';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRouter);
app.use('/api/auth', googleAuthRouter);
app.use('/api/category', categoryRouter);
app.use('/api/user', userRouter);
app.use('/api/transactions', transactionRouter);
app.use('/api/statistics', statisticRouter);

app.use('/link', (req, res) => {
  res.sendFile(path.join(__dirname, './public/link.html'));
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });

  if (!err.status) {
    return res.status(500).json({ message: err.message });
  }
});

export default app;
