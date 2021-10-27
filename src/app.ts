import cors from 'cors';
import express from 'express';

import errorHandler from './middlewares/error';
import user from './routes/user';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', user);
app.use(errorHandler);

export default app;
