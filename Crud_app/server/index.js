import express from 'express';
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js';
import connection from './database/db.js';
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();

const PORT = 5000;
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true }))
// app.get('/', (req, res) => res.send('Hello form Homepage'))
app.use('/', userRoutes)

//DataBase connection
dotenv.config();
const userName = process.env.DB_USERNAME;
const userPass = process.env.DB_PASSWORD;
connection(userName, userPass);

//Starting the server
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

