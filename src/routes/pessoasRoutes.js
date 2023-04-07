import express from 'express';
import PessoasController from '../controllers/pessoasController.js';

const pessoasRoutes = express.Router();

pessoasRoutes
  .get('/pessoas', PessoasController.listarPessoas)
  .get('/pessoas/:id', PessoasController.listarPessoaPorId)
  .post('/pessoas', PessoasController.cadastrarPessoa)
  .put('/pessoas/:id', PessoasController.atualizarPessoa)
  .delete('/pessoas/:id', PessoasController.deletarPessoa); 

export default pessoasRoutes;