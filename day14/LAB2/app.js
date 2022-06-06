const express = require('express');
const app = express();


app.get('/', (req, res) => { //http://localhost:3000 แสดง Hello World
 res.send('Hello World!');
});

app.get('/test', (req, res) => { //http://localhost:3000/test แสดง this is test step
    res.send('this is test step');
   });

// custom 404 page
app.use(function (req, res) { //use จะทำงานเป็นลำดับ ถ้าไว้บนสุด ก็จะแสดง 404 - Not Found
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found'); //send  คือ ส่งข้อมูลไป cliant
   });   

app.listen(3000, () => { //อยู่บรรทัดล่างสุดเสมอ
 console.log('server started on port 3000!'); //ขึ้นทืี่ debug console เพราะ run serverside, port 3000 
});

