//npm init
//npm install express
//npm install nodemon
var express = require('express')

var app = express()

//Middleware example
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send("<h1>Hello, Express JS Example</h1>")
})



//Read Query Parameter - Query String
//http://localhost:8088/student?fnm=Pritesh&lnm=Patel
app.get("/student", (req, res) => {
    var first_name = req.query.fnm
    var last_name = req.query.lnm
    console.log(req.query) //{ fnm: 'Pritesh', lnm: 'Patel' }

    //Create the JS Object
    // let response = {
    //     fnm: first_name,
    //     lsnm: last_name
    // }

    let response = {
        first_name,
        last_name
    }

    //Send JSON - Convert JS Object to JSON
    //res.send(JSON.stringify(response))
    res.send(response)
})

//Read Path Parameter
//http://localhost:8088/student/Pritesh/Patel
app.get("/student/:first_name/:last_name", (req, res) => {
    console.log(req.params) //{ first_name: 'Pritesh', last_name: 'Patel' }

    var fnm = req.params.first_name
    var lnm = req.params.last_name

    let response = {
        first_name: fnm,
        last_name: lnm
    }

    res.send(response)
})


let server = app.listen(8088, () => {
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port)
})