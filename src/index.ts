import express from 'express';
import aduanRouter from './router/aduan.router'; // Import router aduan 
import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from './utils/logger';
import db from './databases/db';  


dotenv.config();

// check database connection on startup
db.raw('SELECT 1')
  .then(() => {
    console.log('Database connection established');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Exit with failure code
  });

const app = express()
const port = 3000

//setup the CORS to allow cross-origin requests from the frontend application 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow all origins, you can specify your frontend URL here
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allowed HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
next();
});


app.use(
  morgan('dev', {
    stream: { write: (message) => logger.info(message.trim()) },
  })
);


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/first-endpoint', (req, res) => {
    res.json('This is the first endpoint')
  })

  app.use('/aduan', aduanRouter); //Prefix rounter unik-"aduan" tu.import sekali sahaja.Declare sekali sahaja

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


