import express from 'express';
import PessoasController from '../controllers/pessoasController.js';

const pessoasRoutes = express.Router();

/**
 * @swagger
 * #Rotas para pessoas
 * 
 *  /pessoas:
 *    get:
 *      parameters:
 *        - name: nome
 *          description: Filtra por pessoa cujo nome contenha o parâmetro informado.
 *          in: query
 *          schema:
 *            type: string
 *          required: false
 *        - name: page
 *          description: Informa a página de início da listagem de pessoas
 *          in: query
 *          schema:
 *            type: int
 *          required: false
 *          default: 1
 *        - name: limit
 *          description: Informa o número máximo de pessoas na exibição.
 *          in: query
 *          schema:
 *            type: int
 *          required: false
 *          default: 5
 *      tags:
 *        - Pessoas
 *      summary: Recupera todos as pessoas
 *      responses:
 *        '200':
 *          description: "Sucesso"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/pessoas'
 *        '404':
 *          description: "Cadastro não encontrado"
 *          content:
 *            application/json:
 *              example: Not Found
 *     
 *    post: 
 *      tags:
 *        - pessoas
 *      summary: Cadastra uma nova pessoa
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/pessoas'
 *      responses:
 *        '201':
 *          description: "Sucesso"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/pessoas'
 *       
 *        '400':
 *          description: "CPF já cadastrado"
 *          content:
 *            application/json:
 *              example: Conflict
 *             
 *  /pessoas/{id}:
 *    parameters:
 *      - name: id
 *        in: path
 *        schema:
 *          type: integer
 *        required: true
 *    get:
 *      tags:
 *        - pessoas
 *      summary: Recupera pessoa por ID
 *      responses:
 *        '200':
 *          description: Sucesso
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/pessoa'
 *        '404':
 *          description: Cadastro não encontrado
 *          content:
 *            application/json:
 *              example: Not Found
 * 
 *    put:
 *      tags:
 *        - pessoas
 *      summary: Atualiza pessoa pelo ID
 *      requestBody:
 *        description: Atualiza pessoa pelo ID
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/pessoa'
 *      responses:
 *        '200':
 *          description: Sucesso
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/pessoa'
 *               
 *        '404':
 *          description: Cadastro não encontrado
 *          content:
 *            application/json:
 *              example: Not Found
 *
 *    delete:
 *      tags:
 *        - pessoas
 *      summary: Deleta pessoa pelo ID
 *      responses:
 *        '200':
 *          description: Sucesso
 *          content:
 *            application/json:
 *              example: Deleted
 *               
 *        '404':
 *          description: Cadastro não encontrado
 *          content:
 *            application/json:
 *              example: Not Found
 * 
 */


pessoasRoutes
  .get('/pessoas', PessoasController.listarPessoas)
  .get('/pessoas/:id', PessoasController.listarPessoaPorId)
  .post('/pessoas', PessoasController.cadastrarPessoa)
  .put('/pessoas/:id', PessoasController.atualizarPessoa)
  .delete('/pessoas/:id', PessoasController.deletarPessoa); 

export default pessoasRoutes;