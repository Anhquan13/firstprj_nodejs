const express = require('express')
const app = express()
const port = 3000

// tuyến đường
app.get('/home1', (req, res) => res.send('Hello World!')
)
/* đoạn này cùng nghĩa là:
app.get('/home', (req, res)=>{
    return res.send('Hello World!';
})
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})