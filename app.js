const http = require('http');

const readFile = (file) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
};

http.createServer((req, res) => {
    res.write('hello world!');
    res.end();
}).listen(3000);


// const http = require('http');
// const readFile = (file) => {
//    return new Promise((resolve, reject) =>{
//        false.readFile(file, (err, data) => {
//            if(err){
//                reject(err);
//            }
//            else {
//                resolve (data.toString());
//            }
//        })
//    })
// }
// const writeFile = (file, data) =>{
//    return new Promise((resolve, reject) =>{
//        false.writeFile(file, (err, data) => {
//            if(err){
//                reject(err);
//            }
//            else {
//                resolve (data.toString());
//            }
//        })
//    })
// }
// // const addUser = (user) =>{
// //    return readFile('./guest.json')
// //    .then(data => {
// //        const users = JSON.parse(data);
// //    })
// // }
// // addUser({name: ``})

// http.createServer((req,res)=>{
//    if(req.url === '/api/users'){
//        readFile('./guest.json')
//         .then(data => {
//            res.write(data);
//            res.end();
//        })
//        .catch(ex=>{
//            res.statusCode = 500;
//            res.write(ex.message);
//            res.end();
//        })
//    }
//    else if(req.url === '/'){
//        readFile('.index.html')
//        .then(data=>{
//            res.write(data);
//            res.end();
//        })
//        .catch(ex=>{
//            res.statusCode = 500;
//            res.write(ex.message);
//            res.end();
//        })
//    }
// }).listen(3000);