const express = require('express')
const app = express()
const port = 3123

const { db } = require('./firebase.js')

app.get('/getList', async (req, res) => {
    const newapps = db.collection('trust')
    const res = []

    newapps.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
          const item = doc.data()
          res.push(item)
        });
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });
  
    
    res.status(200).json(res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
