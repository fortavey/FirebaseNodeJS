const express = require('express')
const app = express()
const port = 3123

const { db } = require('./firebase.js')

const res = []

app.get('/getList', async (req, res) => {
    const newapps = db.collection('trust')

    newapps.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
          const item = doc.data()
          console.log(item)
        });
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });
  
    
    // res.status(200).json(res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
