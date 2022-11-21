if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
  }

  
const express = require('express')
const app = express()
const path = require('path') 
const ejsMate = require('ejs-mate')
const routes = require('./routes/routes')

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes);


app.listen(5000 , () => console.log('Server running on port 5000'))