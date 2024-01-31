import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  database: 'registration',
  connectionLimit: 10,
});

app.post('/register', (req, res) => {
    const sentEmail = req.body.sentEmail;
    const sentUserName = req.body.sentUserName;
    const sentPassword = req.body.sentPassword;
  
    const SQL = 'INSERT INTO users(UserName, Email, Password) VALUES (?, ?, ?)';
    const values = [sentUserName, sentEmail, sentPassword];
  
    db.query(SQL, values, (err, results) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          console.error('Duplicate entry error:', err);
          res.status(400).send({ message: 'Username or Email already exists' });
        } else {
          console.error('Error registering user:', err);
          res.status(500).send({ message: 'Error registering user' });
        }
      } else {
        console.log('User registration successful!');
        res.status(201).send({ message: 'User added successfully!' });
      }
    });
  });
  

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
