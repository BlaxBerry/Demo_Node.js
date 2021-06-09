### parse request body 
from **urlencoded ** to **JSON**
```js
const bd = require('./parsebody.js')

app.use(bd)

app.post('/', (req, res)=>{
    res.send(req.body)
})
```