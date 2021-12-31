const express = require('express')
const app = express()
const port = 3000
app.use(require("@retronbv/colorlogs"))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = () =>{
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
}