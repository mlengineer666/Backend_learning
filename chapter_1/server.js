//  initialize a server using express
const express = require('express')
const app = express() // this will help us eto create a backend application
const PORT = 8090

let data = {
    name:'james'
}
// Type 1 => website endpoint(these endpoints are for sending back html and they typically come when a user enters a url in a browser)
// EndPoint-> HTTPS VERBS(method) && Routes for paths
// this are actually routes
app.get('/',(req,res)=>{
    res.send(`
        <body 
        styles = "background:pink; color: blue;">
        <h1>DATA:</h1>
            <p>${JSON.stringify
            (data)}</p>
        </body>
    `)
})

// This is also route
app.get('/Home',(req,res)=>{
    res.send('<h1>Home page</h1>')
})


app.get('/dashboard',(req,res) =>{
    console.log("Now i hit the dashboard endpoint")
    res.send('<h1>Dashboard</h1>')
})

//CRUD-method is actually [create-post]=>[read-get]=>[update-put]=>[delete-delete]

// API endpoints(non visual)
app.get('/api/data',(req,res) => {
    console.log('This one for data')
    res.send(data)
})


app.post('/api/data',(req,res) => {
    // someone 
    const newEntry = req.body
    console.log(newEntry)
    res.sendStatus(201)
})

app.listen(PORT,() => console.log(`Server sarted on ${PORT}`))



