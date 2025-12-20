const express = require('express')
const app = express()
const port = 3123

const { db } = require('./firebase.js')

app.get('/getList', async (req, res) => {
    const newapps = db.collection('newapps')

    const doc = await newapps.get()

    // if(!doc.exists){
    //     res.status(404)
    // }
  
    res.status(200).json(doc.data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
