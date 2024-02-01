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
 //a route that will register a user
app.post('/register', (req, res) => {
  const sentEmail = req.body.sentEmail;
  const sentUserName = req.body.sentUserName;
  const sentPassword = req.body.sentPassword;

  // Check if email already exists
  const checkEmailSQL = 'SELECT * FROM users WHERE Email = ?';
  db.query(checkEmailSQL, [sentEmail], (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      res.status(500).send({ success: false, message: 'Error checking email' });
    } else if (results.length > 0) {
      console.log('Email already exists:', sentEmail);
      res.status(409).send({ success: false, message: 'Email already exists. Please use another email.' });
    } else {
      // Insert user if email is unique
      const insertUserSQL = 'INSERT INTO users(UserName, Email, Password) VALUES (?, ?, ?)';
      const values = [sentUserName, sentEmail, sentPassword];

      db.query(insertUserSQL, values, (err, results) => {
        if (err) {
          console.error('Error registering user:', err);
          res.status(500).send({ success: false, message: 'Error registering user' });
        } else {
          console.log('User registration successful!');
          res.status(201).send({ success: true, message: 'User added successfully!' });
        }
      });
    }
  });
});


// Another route for login
app.post('/Login', (req, res) => {
  const sentlogEmail = req.body.sentlogEmail;
  const sentlogPassword = req.body.sentlogPassword;

  const selectUserSQL = 'SELECT * FROM users WHERE Email = ? AND Password = ?';
  const values = [sentlogEmail, sentlogPassword];

  db.query(selectUserSQL, values, (err, results) => {
    if (err) {
      res.status(500).send({ error: err });
    } else if (results.length > 0) {
      res.status(200).send(results); 
    } else {
      res.status(401).send({ message: `Credentials Don't match` });
    }
  });
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
