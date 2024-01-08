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
