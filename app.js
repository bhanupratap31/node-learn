//First node server
const http = require('http'); 

const server = http.createServer((req, res) => {
    console.log(req);
}); 

server.listen(3000);

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
