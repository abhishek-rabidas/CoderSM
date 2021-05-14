const express = require('express'); //Import express
const path = require('path');
const port = 8000;

const app = express(); //Acquiring the express methods

app.use("/", require('./routes')); //Using the express router

//Setting up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));


//App is listening at the port
app.listen(port, function() {
    console.log(`Server is runnning at ${port}`); //Interpolation: variables under string
});