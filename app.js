const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));



app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);





//Redirecting Requests
// const http = require('http'); 
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method; 

//     if (url === '/'){
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text"><button type="Submit">Send</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }
//     if (url==='/message' && method === 'POST'){
//         fs.writeFileSync('message.txt', 'DUMMY');
//         res.statusCode = 302; 
//         res.setHeader('Location', '/');
//         return res.end();
//     }

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Sending Response</title></head>');
//     res.write('<body><h1>Welcome to my Nodejs server!</body>');
//     res.write('</html>');
//     res.end();
// }); 

// server.listen(3000);





//Routing Requests
// const http = require('http'); 

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/'){
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text"><button type="Submit">Send</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }
    
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Sending Response</title></head>');
//     res.write('<body><h1>Welcome to my Nodejs server!</body>');
//     res.write('</html>');
//     res.end();
// }); 

// server.listen(3000);

/*Basics of javaScript needed for node.js --not complete*/

// const name = ["Bhanu" , "Pratap" , "Shukla"];  
//    for (let names of name){
//    console.log(names);
// }

// console.log(name.map(names => {
//     return  'Name: ' + names;
// }));
// console.log(name);
// const fetchData = callback => {a
//     const promise = new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve('Callback!');
//         },1500);
//     });
//     return promise;
// };

// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text);
//     });
// },2000);

// console.log('Hello!');
// console.log('Hi!'); 

