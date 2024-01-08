# Docker Compose (Node.js + PostgreSQL) #

## Passo 1 - Criando uma pasta para o projeto ##
>
```
$ mkdir projeto_direx
$ cd projeto_direx
$ mkdir app
$
```
>

## Passo 2 - Criar o arquivo docker-compose.yml ##
>
Usar o editor `nano` ou editor vi para criar o arquivo `docker-compose.yml`
incluindo o texto abaixo.
>
>
```
version: '3'
services:
  web:
    image: node:latest
    volumes:
      - ./app:/app
    working_dir: /app
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: development
    depends_on:
      - db
  db:
    image: postgres:latest
    environment:
      POSTGRES_USER: direx
      POSTGRES_PASSWORD: direx
      POSTGRES_DB: db_direx
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:

```

## Passo 3 - Criar a estrutura do projeto Node.js ##
>
Entrar na pasta `app` e nela criar um arquivo `package.json` com o 
conteúdo definido abaixo.
>
>
```
{
  "name": "docker-node-postgres",
  "version": "1.0.0",
  "description": "Node.js app com PostgreSQL usando Docker",
  "main": "index.js",
  "dependencies": {
    "express": "^4.17.1",
    "pg": "^8.7.1"
  }
}
```
## Passo 4 - Criar o código JavaScript para acessar o Banco de Dados ##

>
Na pasta app criar o arquivo `index.js` e nele incluir o código 
abaixo.
>
>
```
const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: 'direx',
  host: 'db',
  database: 'bd_direx',
  password: 'direx',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT $1::text as message', ['Hello world!']);
    const message = result.rows[0].message;
    res.send(`Message from PostgreSQL: ${message}`);
    client.release();
  } catch (err) {
    res.send(`Error: ${err.message}`);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
>

## Passo 5: Executando a aplicação ##
>
Navegue até a pasta onde está o arquivo `docker-compose.yml`.
>
>
Execute o comando `docker-compose up` para iniciar os serviços.
>
>
A aplicação Node.js estará disponível em `localhost:3000`. 
> 
> 
Você pode acessar essa URL em um navegador para ver a mensagem 
vinda do PostgreSQL.
>
>
Certifique-se de ajustar as configurações de segurança e 
gerenciamento de banco de dados conforme necessário para 
ambientes de produção. 
>




