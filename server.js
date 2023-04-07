import app from './src/app.js';
import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.API_PORT || 3030;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});