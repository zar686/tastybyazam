
const express = require('express')
const bodyParser = require('body-parser')
const port = 5000

const app = express()

// Set Templating Enginge
app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Navigation
app.get('', (req, res)=> {
    res.render('index')
})

app.get('/inquiry', (req, res)=> {
    res.render('inquiry')
})

app.post('/inquiry', urlencodedParser, (req, res)=> {
    res.json(req.body)
})

app.listen(port, () => console.info(`App listening on port: ${port}`))
