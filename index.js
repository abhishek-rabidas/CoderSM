const express = require('express'); //Import express
const port = 8000;

const app = express(); //Acquiring the express methods

//Returning response to the GET request from the browser
app.get("/", function(req, res) {

    return res.send("HEY");
});


//App is listening at the port
app.listen(port, function() {
    console.log(`Server is runnning at ${port}`); //Interpolation: variables under string
});