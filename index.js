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
            res.push(doc.data())
        });
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });

    // const doc = await newapps.get()

    // if(!doc.exists){
    //     res.status(404)
    // }
  
    res.status(200).json(res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
