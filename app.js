import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import swaggerDocument from './swagger.json';
import { authRouter } from './routes/api';
import googleRouter from './routes/api/google-router/google-router';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use('/api/auth', googleRouter);
// app.use('/api/transactions');
// app.use('/api/statistics');

app.use('/auth', googleRouter);
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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;