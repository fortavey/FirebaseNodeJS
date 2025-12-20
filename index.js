const express = require('express')
const app = express()
const port = 3123

const { db } = require('./firebase.js')

app.get('/getList', async (req, res) => {
    const newapps = db.collection('trust')

    newapps.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
        });
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });

    // const doc = await newapps.get()

    // if(!doc.exists){
    //     res.status(404)
    // }
  
    // res.status(200).json(doc)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
