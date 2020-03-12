const express = require('express')
const { MongoClient, ObjectID } = require('mongodb')



const app = express()
app.use(express.json())

const mongo_url = 'mongodb://localhost:27017'
const dataBase = "rest-api"

MongoClient.connect(mongo_url, { useUnifiedTopology: true },(err, client) => {
    
        const db = client.db(dataBase)
    
    
        app.post('/new_contact', (req, res) => {
            let newContact = req.body
            db.collection('contact').insertOne(newContact, (err, data) => {
                if (err) res.json('cant add contact')
                else res.json(data)
            })
        })

        app.get('/get_contact' ,(req , res)=>{
            db.collection('contact').find().toArray((err,data)=>{
                if(err)
                res.json('cant fetch array')
                else
                res.json(data)
            })
        })

        app.put('/modify_contact/:id',(req, res)=>{
            let id = ObjectID(req.params.id)
            let modifiedContact = req.body
            console.log(req.body)
            db.collection('contact').findOneAndUpdate({_id: id}, 
            {$set: {...modifiedContact}}, (err, data)=>{
                if(err) res.json('cant modify contact')
                else res.json('Contact edited')
            })
        })
    
        app.delete('/delete_contact/:id', (req,res)=>{
            let contactToRemoveId =ObjectID(req.params.id)
            db.collection('contact').findOneAndDelete({_id : contactToRemoveId},(err,data)=>{
                if(err) res.json('cant delete contact')
                else res.json('data deleted')
            })

        })

})


app.listen(5000, (err) => {
    if (err)
        console.log("Server Error")
    else
        console.log("Server Is Running On Port 5000")
})