const express = require('express')
const app = express()
const port = 3123

const { db } = require('./firebase.js')

app.get('/getList', async (req, res) => {
    const newapps = db.collection('newapps')
    const output = []

    newapps.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
          const item = doc.data()
          output.push(item)
        });
        res.status(200).json(output)
    })
    .catch(err => {
        console.log('Error getting documents', err);
    }); 
})

app.listen(port, () => {
  console.log(`Server start on port ${port}...`)
})
