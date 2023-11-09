import express from 'express';
import { router } from './routes';
import 'dotenv/config';
import { swaggerRouter } from './routes/swagger/swaggerRouter';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);
app.use(swaggerRouter);

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
