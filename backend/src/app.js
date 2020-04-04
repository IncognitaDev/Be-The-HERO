const express = require('express');
const routes = require('./routes');
const { errors} = require('celebrate')
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors());
{
/**
 * Rota / Recurso 
 */

 /**
  * metodo HTTP:
  * 
  * GET: Buscaruma informação no Back-end
  * POST: Criar uma infromação no Back-end
  * PUT: alterar uma informação no Back-end
  * DELETE: deletando uma informação
  * 
  */


 /**
  * Tipos de paramentros
  * 
  * Query: Paramentros nomeados enviados na rota apos "?"  (filtros Paginação) - query
  * Route: Paramentros utilizados para identificar recursos - params
  * Request body: Corpo doa requisiçaõ, utilixado para criar ou aterar  recusrsos  - body
  */

  /**
   * SQL : MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server
   * noSQL: MongoDB, CouchDB, etc
   */

/**
 * Driver: SELECT * FROM users
 * Query Builder : Table('users).select(*).where()
*/}
 

module.exports = app

