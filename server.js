const express = require('express')
const app = express()
PORT = 3000
app.use(express.json())
app.use(express.static('public'))
const db = []

app.get('/', (req, res)=> {
    console.log('You have reached home route')
    res.status(200)
})

app.post('/api/info', (req, res)=> {
    const {information} = req.body
    console.log("POSTED MESSAGE :", information)
    db.push(information)
    console.log("DB :", db)
    res.status(201).json({"Your message": information})
})

app.put('/api', (req, res)=>{
const {name, surname} = req.query
console.log(name, surname)
res.sendStatus(201)
})

app.delete('/delete/:id/:name', (req, res)=>{
    const {id, name} = req.params
    console.log("What do you want to delete?", id, name)
    res.sendStatus(200)
})

app.listen(PORT, ()=> console.log(`The server has started on port : ${PORT}`))