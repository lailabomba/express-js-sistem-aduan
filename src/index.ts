import express from 'express';
import aduanRouter from './router/aduan.router'; // Import router aduan 
const app = express()

const port = 3000

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
 
