import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';
import db from "./config/database.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

export default app