const express = require('express'); //Import express
const port = 8000;

const app = express(); //Acquiring the express methods

app.use("/", require('./routes')); //Using the express router




//App is listening at the port
app.listen(port, function() {
    console.log(`Server is runnning at ${port}`); //Interpolation: variables under string
});