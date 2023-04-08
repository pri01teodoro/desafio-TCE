import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();

await mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,})
  .then(response => {
    console.log('MongoDB conectado!')
  })
  .catch(error => {
    console.log('Erro na conexão com o MongoDB: ' + error)
  });
  

let db = mongoose.connection;

export default db;