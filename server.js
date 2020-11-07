const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = 8080;

app.use(express.static('views'));
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('/views/index.html');
});

app.listen(port, () =>{
    console.log('App listening at port 8080');
})

