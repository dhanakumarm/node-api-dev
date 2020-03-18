const express = require('express');
const app = express();
const port = 3000;

const sampleRouter = require("./routes/sampleRoute");


var myLogger = (req, res, next) => {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

app.get("/", (req, res) => {
    res.send("Hello world...!");
});


// Request: http://localhost:3000/user/1/username/dhana
// Response 
/*
{
    "userId": "1",
    "userName": "dhana"
}
*/
app.get("/user/:userId/username/:userName", (req, res) => {
    res.send(req.params);
});


app.use('/sample', sampleRouter);

// app.use(function (err, req, res, next) {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// });

app.listen(port, () => {
    console.log(`Node is running with port ${port}`);
})
