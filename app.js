const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('.....')
});

app.post('/', (req,res)=> {
    console.log(req);
    res.send('성공');
});

app.get("/send", (req, res)=> {
    res.json({
        fruit : 'apple',

    });

});

app.listen(3002, () => {
    console.log('나는 켜졋다');
});






