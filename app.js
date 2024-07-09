const express = require('express')
const app = express()
const port = 3010

app.get('/', (req, res) => {
  res.send('express app for Restaurant')
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})