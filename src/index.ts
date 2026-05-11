import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/first-endpoint', (req, res) => {
    res.json('This is the first endpoint')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
