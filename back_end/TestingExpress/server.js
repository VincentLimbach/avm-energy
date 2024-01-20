require('dotenv').config();

const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const bodyParser = require('body-parser');
const cors = require('cors'); 


const app = express();
const port = process.env.PORT || 3001; 

const pool = new Pool({
  user: process.env.DB_USER,     
  host: process.env.DB_HOST,     
  database: process.env.DB_NAME, 
  password: process.env.DB_PASS, 
  port: process.env.DB_PORT || 5432, 
});


app.use(cors());

app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const { username, password, email} = req.body;
  console.log(req.body)
  try {
    
    const userExistsQuery = 'SELECT * FROM users WHERE username = $1 or email = $2';
    const userExistsResult = await pool.query(userExistsQuery, [username, email]);

    if (userExistsResult.rows.length > 0) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const insertUserQuery = 'INSERT INTO users (username, password, email, verified) VALUES ($1, $2, $3, false)';
    await poolFly.query(insertUserQuery, [username, hashedPassword, email]);

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const findUserQuery = 'SELECT * FROM users WHERE username = $1';
    const result = await poolFly.query(findUserQuery, [username]);

    if (result.rows.length != 1) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const user = result.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    res.status(200).json({ message: 'Authentication successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/offers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM offers');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/create_offer', async (req, res) => {
  const { size, type, cost } = req.body;

  try {
    const insertQuery = 'INSERT INTO offers (size, type, cost) VALUES ($1, $2, $3)';
    await pool.query(insertQuery, [size, type, cost]);
    res.status(201).json({ message: 'Offer created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
